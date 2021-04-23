[@cobuildlab/react-simple-state](../README.md) › ["hooks"](_hooks_.md)

# Module: "hooks"

## Index

### Functions

* [useCallAction](_hooks_.md#usecallaction)
* [useEvent](_hooks_.md#useevent)
* [useFetchAction](_hooks_.md#usefetchaction)
* [useSubscription](_hooks_.md#usesubscription)

## Functions

###  useCallAction

▸ **useCallAction**‹**T**, **U**, **R**, **E**›(`action`: [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E, R›, `options?`: [UseActionOptions](_types_.md#useactionoptions)‹T, E›): *[UseCallActionReturn](_types_.md#usecallactionreturn)‹T, U, E›*

*Defined in [src/hooks.ts:188](https://github.com/cobuildlab/react-simple-state/blob/72fa9c7/src/hooks.ts#L188)*

Hook that handle call promise actions, like mutations to database in a declarative way.

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

▪ **R**

▪ **E**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E, R› | The action to be called. |
`options?` | [UseActionOptions](_types_.md#useactionoptions)‹T, E› | Option to handle the actions. |

**Returns:** *[UseCallActionReturn](_types_.md#usecallactionreturn)‹T, U, E›*

- Hook state result.

___

###  useEvent

▸ **useEvent**‹**U**, **T**, **V**›(`event`: [Event](../classes/_event_.event.md)‹T, V›, `params?`: [EventHookParams](_types_.md#eventhookparams)‹T, U›): *[useEventReturn](_types_.md#useeventreturn)‹T, U›*

*Defined in [src/hooks.ts:56](https://github.com/cobuildlab/react-simple-state/blob/72fa9c7/src/hooks.ts#L56)*

React Hook to subscribe to an Event.

**Type parameters:**

▪ **U**

▪ **T**

▪ **V**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [Event](../classes/_event_.event.md)‹T, V› | The event. |
`params?` | [EventHookParams](_types_.md#eventhookparams)‹T, U› | Params. |

**Returns:** *[useEventReturn](_types_.md#useeventreturn)‹T, U›*

Data object.

___

###  useFetchAction

▸ **useFetchAction**‹**T**, **U**, **R**, **E**›(`action`: [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E, R›, `params`: U, `options?`: [UseFetchActionOptions](../interfaces/_types_.usefetchactionoptions.md)‹T, E›): *[UseFetchActionReturn](_types_.md#usefetchactionreturn)‹T, E›*

*Defined in [src/hooks.ts:103](https://github.com/cobuildlab/react-simple-state/blob/72fa9c7/src/hooks.ts#L103)*

Hook that handle fetch promise actions, like querys to database.
This hook uses a declarative pattern.

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

▪ **R**

▪ **E**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [ActionType](../interfaces/_types_.actiontype.md)‹T, U, E, R› | Action to fetch. |
`params` | U | Param to call the action. |
`options?` | [UseFetchActionOptions](../interfaces/_types_.usefetchactionoptions.md)‹T, E› | Option to handle the actions. |

**Returns:** *[UseFetchActionReturn](_types_.md#usefetchactionreturn)‹T, E›*

- Hook state result.

___

###  useSubscription

▸ **useSubscription**‹**T**, **U**, **V**›(`event`: [Event](../classes/_event_.event.md)‹T, V›, `callback`: function, `deps`: U[] | undefined): *void*

*Defined in [src/hooks.ts:21](https://github.com/cobuildlab/react-simple-state/blob/72fa9c7/src/hooks.ts#L21)*

React Hook to subscribe to an specific event.

**Type parameters:**

▪ **T**

▪ **U**

▪ **V**

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T, V›*

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

- Void hook.
