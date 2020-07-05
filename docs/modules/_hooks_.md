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

*Defined in [src/hooks.ts:23](https://github.com/cobuildlab/react-simple-state/blob/269d4ef/src/hooks.ts#L23)*

#### Type declaration:

* **initialValue**? : *T*

* **reducer**? : *undefined | function*

## Functions

###  useEvent

▸ **useEvent**‹**T**›(`event`: [Event](../classes/_event_.event.md)‹T›, `params?`: [EventHookParams](_hooks_.md#eventhookparams)‹T›): *null | T*

*Defined in [src/hooks.ts:34](https://github.com/cobuildlab/react-simple-state/blob/269d4ef/src/hooks.ts#L34)*

React Hook to subscribe to an Event.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [Event](../classes/_event_.event.md)‹T› | The event. |
`params?` | [EventHookParams](_hooks_.md#eventhookparams)‹T› | - |

**Returns:** *null | T*

___

###  useSubscription

▸ **useSubscription**‹**T**›(`event`: [Event](../classes/_event_.event.md)‹T›, `callback`: function, `deps`: any[]): *void*

*Defined in [src/hooks.ts:10](https://github.com/cobuildlab/react-simple-state/blob/269d4ef/src/hooks.ts#L10)*

React Hook to subscribe to an specific event

**Type parameters:**

▪ **T**

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T›*

The event to subscribe. The Event is considered constant across renders.

▪ **callback**: *function*

A function to be called when the subscription gets triggered.

▸ (`value?`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | T |

▪ **deps**: *any[]*

List of dependencies for the callback. Follow the same rules of useEffect.

**Returns:** *void*
