# React Simple State

A simple and predictable state management for React and React Native Applications.

## Goals:

- Easy to use and to maintain state management on a React Application.
- Scalable
- Easy to organize
- Compatible with Hooks and Class based Components.

Inspired by:

- Flux State Management [flux-state](https://github.com/cobuildlab/flux-state) Library
- React bindings for Flux State Management [react-flux-state](https://github.com/cobuildlab/react-simple-state) Library
- RXJS [rxjs](https://github.com/reactivex/rxjs) Library
- Recoil State Management [recoil](https://github.com/facebookexperimental/Recoil) Library

## Installation

1. Run on your terminal the following command:

```sh
$ npm i --save @cobuildlab/react-simple-state
```

2. To import the library anywhere you would like to use it:

```js
import {
  createEvent,
  useSubscription,
  useEvent,
  View,
} from '@cobuildlab/react-simple-state';
```

## API Docsw

| Object                                | Description                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`EventParams`](#EventParams)         | Params for the createEvent function.                                                                  |
| [`createEvent`](#createEvent)         | Helper function to create state events.                                                               |
| [`View`](#View)                       | Subclass of `React.View` that includes a `this.subscribe` method to subscribe to changes on an Event. |
| [`useSubscription`](#useSubscription) | A hook for subscribe to specific events with a callback.                                              |
| [`EventHookParams`](#EventHookParams) | Params for the `useEvent` hook.                                                                       |
| [`useEvent`](#useEvent)               | A declarative alternative to the `useSubscription`.                                                   |

### `EventParams`

- `initialValue` - An initial value for the event.
- `reducer` A function that mutates the state before it gets propagated.

### `createEvent(params: EventParams)`

- Allows you to create a subscribable event.
- The result object can be used for subscriptions with the `View` or the hooks: `useEvent` and `useSubscription`

[`Example`](#Examples)

```javascript
// agency-events.js
import { createEvent } from '@cobuildlab/react-simple-state';

export const OnAgencyList = createEvent();
export const OnAgencyListError = createEvent();
export const OnNewAgent = createEvent({
  initialValue: new Agent(),
  reducer: (prevState) => {
    prevState.agencies = OnAgencyList.get();
    return prevState;
  },
});
```

### `View`

- Allows you to create subscription to events from Class based components
- It handles the subscription lifecycle: subscribe and unsubscribe on react lifecycle events.

[`Example`](#Examples)

```javascript
// AgencyView.js

import {View} from "@cobuildlab/react-simple-state";
import {OnAgencyList, OnNewAgent} from "./agency-events.js"

class AgencyView extend View{

  componentDidMount () {
    this.subscribe(OnAgencyList, (state)=> {
      // So something with the state.
    })

    this.subscribe(OnNewAgent, (state)=> {
      // So something with the state.
    })

  }
}
```

### `useSubscription(store, eventName, callback)`

- It subscribes a `callback` to an Event from functional components using hooks.
- It handles the subscription lifecycle

[`Example`](#Examples)

```javascript

// AgencyView.js

import {useSubscription} from "@cobuildlab/react-simple-state";
import {OnAgencyList, OnNewAgent} from "./agency-events.js"

const AgencyView = ()=> {
    useSubscription(OnAgencyList, (state)=>{
        // Do something with the state
    });

    useSubscription(OnNewAgent, (state)=>{
        // Do something with the state
    });

    return ();
}
```

### `EventHookParams`

- `initialValue` - An initial value for the event.
- `reducer` A function that mutates the state before it gets propagated.

### `useEvent(eventName, initialValue, reducer)`

- It subscribes ton event from functional components using hooks with a declarative approach.
- It handles the subscription lifecycle
- It handles initial values for the events
- It handles a reducer function for the state.

[`Example`](#Examples)

```javascript

// AgencyView.js

import {useEvent} from "@cobuildlab/react-simple-state";
import {OnAgencyList, OnNewAgent} from "./agency-events.js"

const AgencyView = ()=> {
    const state = useEvent(OnAgencyList);
    const agent = useEvent(OnNewAgent, {initialValue: {}, reducer: (prevState) => prevState.agent});

    return ();
}
```

### Full Example

Let's build a Flux Workflow for authentication

### 1) First, declare your Events

```js
import { createEvent } from '@cobuildlab/react-simple-state';

export const LogoutEvent = createEvent({
  reducer: (prevState) => {
    localStorage.clear();
    return prevState;
  },
});
export const LoginEvent = createEvent();
export const PermissionError = createEvent({
  reducer: (prevState) => {
    LogoutEvent.dispatch();
    return prevState;
  },
});

export { LogoutEvent, LoginEvent, PermissionError };
```

### 2) Registering with the Store changes

```js
import React from 'react';
import {LogoutEvent, LoginEvent,PermissionError } from "./agency-events.js";
import {View, useSubscription, useEvent} from '@cobuildlab/react-simple-state';

// Class Based
class View extends View {
      constructor(){
          super();
      }
      componentDidMount() {
          this.subscribe(LoginEvent, (state) => {
              // Do something useful with the Event Data
              const userName = state.user.name;
              this.setState({userName});
          });
          // Register some method
          this.subscribe(LogoutEvent this.logOutEvent);
      }

      logOutEvent = (state) => {
        //DO something with the state or the state of the Store
        const storeState = LogoutEvent.get();
      }
  }

// or Functional with React Hooks
const View = (props) => {
  // Set an Initial Value
  const loginState = useEvent(LoginEvent);
  const userState = useEvent(LogoutEvent, {reducer:(state) => state.user});

  useSubscription(LoginEvent, (state) => {
    // setError
    // toast.error()
  });

  return (
    {loginState && <User user={loginState}>}
  )
};
```

### 3) Define some actions that will trigger the event

```js
import { LoginEvent, LogoutEvent } from './agency-events.js';

const authenticateAction = (username, password) => {
  if (username === undefined) return LogoutEvent.dispatch();

  let dataToSave = {
    authenticated: true,
    username,
    password,
  };
  LoginEvent.dispatch(dataToSave);
};

export { authenticateAction };
```

### 4) Actions can be created with `createAction` helper

```js
import { createAction } from '@cobuildlab/react-simple-state';
import { OnFecthUserEvent, OnFetchUserErrorEvent } from './events';
import { apiClient } from './api';

// single declarition of the async service and the action
export const fetchUserAction = createAction(
  OnFecthUserEvent,
  OnFetchUserErrorEvent,
  async (id) => {
    const user = await apiClient.fetch({ user: id });

    return user;
  },
);

// Or we could declare the async service and then use in with diferent actions

export const fetchUserService = async (id) => {
  const user = await apiClient.fetch({ user: id });

  return user;
};

export const fetchMainUserAction = createAction(
  OnFecthMainUserEvent,
  OnFetchMainUserErrorEvent,
  fetchUserService,
);
export const fetchSecondaryUserAction = createAction(
  OnFecthSecondaryUserEvent,
  OnFetchSecondaryUserErrorEvent,
  fetchUserService,
);
```

### 5) Fetch can be done with `useFetchAction` hook

```js
import { useFetchAction } from '@cobuildlab/react-simple-state';
import { fetchUser } from './actions';

// UserProfile component
export const UserProfile = ({ userId, loadingToken }) => {
  const [user, loadingUser] = useFetchAction(fetchUser, [userId]);

  // OR... skip the fetch ultil the token loads
  const [user, loadingUser] = useFetchAction(fetchUser, [userId], {
    skip: loadingToken,
  });
  // OR...

  const [user, loadingUser] = useFetchAction(fetchUser, [userId], {
    onCompleted: () => {
      toast.success('user fetched');
    },
    onError: () => {
      toast.error('Error when fetching user');
    },
  });

  // OR...

  const [user, loadingUser, { refetch }] = useFetchAction(fetchUser, [userId], {
    onCompleted: () => {
      toast.success('user fetched');
    },
    onError: () => {
      toast.error('Error when fetching user');
    },
  });

  useSubscription(OnSaveUserEvent, () => {
    // refetch the user after saving form for example
    refetch();
  });
  return; // profile view
};
```

### 6) callable fetch can be done with `useCallAction` hook

```js
import { useCallAction } from '@cobuildlab/react-simple-state';
import { saveUser } from './actions';

// UserProfile component
export const UserProfile = ({ userId }) => {
  const userData = userDataState;
  const [save, loadingSubmit] = useCallAction(saveUser, [
    userId,
    useCallAction,
  ]);
  // OR...

  // setup the action, and return a function that will trigger the action when it needed.
  const [save, loadingSubmit] = useCallAction(saveUser, [userId, userData], {
    onCompleted: () => {
      toast.success('user saved');
    },
    onError: () => {
      toast.error('Error when saving user');
    },
  });

  return (
    <Form>
      <SubmitButton onClick={() => save()} />
    </Form>
  );
};
```

## Changelog

### v0.5.0:

- Add `useCallAction` and `useFetchAction` hooks to have a better declaritive way to handle promise in components.

### v0.4.4:

- Add `isEmpty` method to event to know if the event has data without to call the `get` method.

### v0.4.0:

- Add `createAction` decorator

### v0.3.0:

- Cache callback on `useEvent`
- Cache the callback on `useSubscription` and add a dependencies parameter.
- Remove `Ramda` and `Rxjs` as dependencies

### v0.2.0:

- Remove: `receiveLastValue` for the `useQuery` hook

### v0.1.0:

- Typos and documentation

### v0.0.1:

- State Draft
