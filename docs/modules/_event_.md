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

*Defined in [src/event.ts:7](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L7)*

#### Type declaration:

* **initialValue**? : *T*

* **reducer**? : *[Reducer](_event_.md#reducer)‹T›*

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/event.ts:5](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L5)*

#### Type declaration:

▸ (`value`: T | undefined): *T | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; undefined |

## Functions

###  createEvent

▸ **createEvent**‹**T**›(`eventDescriptor?`: [EventParams](_event_.md#eventparams)‹T›): *[Event](../classes/_event_.event.md)‹T›*

*Defined in [src/event.ts:63](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L63)*

Creates an event from a descriptor.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventDescriptor?` | [EventParams](_event_.md#eventparams)‹T› |   |

**Returns:** *[Event](../classes/_event_.event.md)‹T›*
