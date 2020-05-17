

# React Simple State

A simple and predictable state management for React and React Native Applications.

## Goals:

- Easy to use and to maintain state management on a React Application.
- Scalable
- Easy to organize
- Compatible with Hooks and Class based Components.
  

Inspired by:

* Flux State Management [flux-state](https://github.com/cobuildlab/flux-state) Library
* React bindings for Flux State Management [react-flux-state](https://github.com/cobuildlab/react-simple-state) Library
* RXJS [rxjs](https://github.com/reactivex/rxjs) Library
* Recoil State Management [recoil](https://github.com/facebookexperimental/Recoil) Library


## Installation

1. Run on your terminal the following command:
```sh
$ npm i --save @cobuildlab/react-simple-state
```

2. To import the library anywhere you would like to use it:
```js
import {createEvent, useSubscription, useEvent, View} from '@cobuildlab/react-simple-state';
```

## API Docs

| Object   | Description   | 
| ------ | ------ | 
| [`EventParams`](#EventParams) | Params for the createEvent function.  | 
| [`createEvent`](#createEvent) | Helper function to create state events.  | 
| [`View`](#View) | Subclass of `React.View` that includes a `this.subscribe` method to subscribe to changes on an Event.  | 
| [`useSubscription`](#useSubscription) | A hook for subscribe to specific events with a callback.  |
| [`EventHookParams`](#EventHookParams) | Params for the `useEvent` hook.  | 
| [`useEvent`](#useEvent) | A declarative alternative to the `useSubscription`.  | 


### `EventParams`

- `initialValue` - An initial value for the event.
- `reducer` A function that mutates the state before it gets propagated.


### `createEvent(params: EventParams)`

- Allows you to create a subscribable event. 
- The result object can be used for subscriptions with the `View` or the hooks: `useEvent` and `useSubscription`

[`Example`](#Examples)

```javascript
// agency-events.js
import {createEvent} from "@cobuildlab/react-simple-state";

export const OnAgencyList = createEvent();
export const OnAgencyListError = createEvent();
export const OnNewAgent = createEvent({
  initialValue : new Agent(),
  reducer: (prevState)=>{
    prevState.agencies = OnAgencyList.get()
    return prevState;
  }
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
- `receiveLastValue` A flag to receive the last value the first time that the hook gets created. 

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
import {createEvent} from "@cobuildlab/react-simple-state";

export const LogoutEvent = createEvent({
  reducer: (prevState)=>{
    localStorage.clear();
    return prevState;
  }
});
export const LoginEvent = createEvent();
export const PermissionError = createEvent({
  reducer: (prevState)=>{
    LogoutEvent.dispatch();
    return prevState;
  }
});

export {LogoutEvent, LoginEvent,PermissionError } ;
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
import {LoginEvent, LogoutEvent} from "@cobuildlab/react-simple-state"; 

const authenticateAction = (username, password)=> {
      if (username === undefined)
        return LogoutEvent.dispatch();
      
      let dataToSave = {
          authenticated: true,
          username,
          password,
      }
      LoginEvent.dispatch(dataToSave);
}

export {authenticateAction};
```
## Changelog

### v0.1.0:

- Typos and documentation

### v0.0.1:

- State Draft
