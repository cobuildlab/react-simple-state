[@cobuildlab/react-simple-state](../README.md) › ["hooks"](_hooks_.md)

# Module: "hooks"

## Index

### Type aliases

* [EventHookParams](_hooks_.md#eventhookparams)

### Functions

* [useCallAction](_hooks_.md#usecallaction)
* [useEvent](_hooks_.md#useevent)
* [useFetchAction](_hooks_.md#usefetchaction)
* [useSubscription](_hooks_.md#usesubscription)

## Type aliases

###  EventHookParams

Ƭ **EventHookParams**: *object*

*Defined in [src/hooks.ts:43](https://github.com/cobuildlab/react-simple-state/blob/fe49677/src/hooks.ts#L43)*

#### Type declaration:

* **initialValue**? : *T*

* **reducer**? : *undefined | function*

## Functions

###  useCallAction

▸ **useCallAction**‹**T**, **U**, **E**›(`action`: [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E›, `params`: U, `options?`: [UseActionOptions](_types_.md#useactionoptions)‹T, E›): *[UseCallActionReturn](_types_.md#usecallactionreturn)‹T, E›*

*Defined in [src/hooks.ts:166](https://github.com/cobuildlab/react-simple-state/blob/fe49677/src/hooks.ts#L166)*

Hook that handle call promise actions, like mutations to database in a declarative way.

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

▪ **E**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E› | The action to be called. |
`params` | U | Array of the params to pass to the action. |
`options?` | [UseActionOptions](_types_.md#useactionoptions)‹T, E› | Option to handle the actions. |

**Returns:** *[UseCallActionReturn](_types_.md#usecallactionreturn)‹T, E›*

- Hook state result.

___

###  useEvent

▸ **useEvent**‹**T**›(`event`: [Event](../classes/_event_.event.md)‹T›, `params?`: [EventHookParams](_hooks_.md#eventhookparams)‹T›): *null | T*

*Defined in [src/hooks.ts:57](https://github.com/cobuildlab/react-simple-state/blob/fe49677/src/hooks.ts#L57)*

React Hook to subscribe to an Event.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [Event](../classes/_event_.event.md)‹T› | The event. |
`params?` | [EventHookParams](_hooks_.md#eventhookparams)‹T› | Params. |

**Returns:** *null | T*

Data object.

___

###  useFetchAction

▸ **useFetchAction**‹**T**, **U**, **E**›(`action`: [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E›, `params`: U, `options?`: [UseActionOptions](_types_.md#useactionoptions)‹T, E›): *[UseFetchActionReturn](_types_.md#usefetchactionreturn)‹T, E›*

*Defined in [src/hooks.ts:91](https://github.com/cobuildlab/react-simple-state/blob/fe49677/src/hooks.ts#L91)*

Hook that handle fetch promise actions, like querys to database.
This hook uses a declarative pattern.

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

▪ **E**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E› | Action to fetch. |
`params` | U | Param to call the action. |
`options?` | [UseActionOptions](_types_.md#useactionoptions)‹T, E› | Option to handle the actions. |

**Returns:** *[UseFetchActionReturn](_types_.md#usefetchactionreturn)‹T, E›*

- Hook state result.

___

###  useSubscription

▸ **useSubscription**‹**T**, **U**›(`event`: [Event](../classes/_event_.event.md)‹T›, `callback`: function, `deps`: U[] | undefined): *void*

*Defined in [src/hooks.ts:17](https://github.com/cobuildlab/react-simple-state/blob/fe49677/src/hooks.ts#L17)*

React Hook to subscribe to an specific event.

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T›*

The event to subscribe. The Event is considered constant across renders.

▪ **callback**: *function*

A function to be called when the subscription gets triggered.

▸ (`value`: T | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

▪`Default value`  **deps**: *U[] | undefined*= undefined

List of dependencies for the callback. Follow the same rules of useEffect.

**Returns:** *void*
