[@cobuildlab/react-simple-state](../README.md) › ["hooks"](_hooks_.md)

# Module: "hooks"

## Index

### Type aliases

* [EventHookParams](_hooks_.md#eventhookparams)

### Functions

* [useEvent](_hooks_.md#useevent)
* [useSubscription](_hooks_.md#usesubscription)

## Type aliases

###  EventHookParams

Ƭ **EventHookParams**: *object*

*Defined in [src/hooks.ts:35](https://github.com/cobuildlab/react-simple-state/blob/0a311bb/src/hooks.ts#L35)*

#### Type declaration:

* **initialValue**? : *T*

* **reducer**? : *undefined | function*

## Functions

###  useEvent

▸ **useEvent**‹**T**›(`event`: [Event](../classes/_event_.event.md)‹T›, `params?`: [EventHookParams](_hooks_.md#eventhookparams)‹T›): *null | T*

*Defined in [src/hooks.ts:49](https://github.com/cobuildlab/react-simple-state/blob/0a311bb/src/hooks.ts#L49)*

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

###  useSubscription

▸ **useSubscription**‹**T**, **U**›(`event`: [Event](../classes/_event_.event.md)‹T›, `callback`: function, `deps`: U[]): *void*

*Defined in [src/hooks.ts:11](https://github.com/cobuildlab/react-simple-state/blob/0a311bb/src/hooks.ts#L11)*

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

▪ **deps**: *U[]*

List of dependencies for the callback. Follow the same rules of useEffect.

**Returns:** *void*