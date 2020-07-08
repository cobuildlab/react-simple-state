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

*Defined in [src/event.ts:5](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L5)*

#### Type declaration:

* **initialValue**? : *T | null*

* **reducer**? : *[Reducer](_event_.md#reducer)‹T›*

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/event.ts:3](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L3)*

#### Type declaration:

▸ (`value`: T | null): *T | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

## Functions

###  createEvent

▸ **createEvent**‹**T**›(`eventDescriptor?`: [EventParams](_event_.md#eventparams)‹T›): *[Event](../classes/_event_.event.md)‹T›*

*Defined in [src/event.ts:62](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L62)*

Creates an event from a descriptor.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventDescriptor?` | [EventParams](_event_.md#eventparams)‹T› |   |

**Returns:** *[Event](../classes/_event_.event.md)‹T›*
