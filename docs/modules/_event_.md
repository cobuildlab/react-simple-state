[@cobuildlab/react-simple-state](../README.md) › ["event"](_event_.md)

# Module: "event"

## Index

### Classes

* [Event](../classes/_event_.event.md)

### Type aliases

* [EventParams](_event_.md#eventparams)
* [Reducer](_event_.md#reducer)

### Functions

* [createEvent](_event_.md#createevent)

## Type aliases

###  EventParams

Ƭ **EventParams**: *object*

*Defined in [src/event.ts:10](https://github.com/cobuildlab/react-simple-state/blob/d032904/src/event.ts#L10)*

#### Type declaration:

* **initialValue**? : *T | null*

* **reducer**? : *[Reducer](_event_.md#reducer)‹T, U›*

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/event.ts:8](https://github.com/cobuildlab/react-simple-state/blob/d032904/src/event.ts#L8)*

#### Type declaration:

▸ (`value`: U | T | null): *T*

**Parameters:**

Name | Type |
------ | ------ |
`value` | U &#124; T &#124; null |

## Functions

###  createEvent

▸ **createEvent**‹**T**›(`eventDescriptor?`: [EventParams](_event_.md#eventparams)‹T›): *[Event](../classes/_event_.event.md)‹T›*

*Defined in [src/event.ts:84](https://github.com/cobuildlab/react-simple-state/blob/d032904/src/event.ts#L84)*

Creates an event from a descriptor.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventDescriptor?` | [EventParams](_event_.md#eventparams)‹T› |   |

**Returns:** *[Event](../classes/_event_.event.md)‹T›*
