[@cobuildlab/react-simple-state](../README.md) › ["event"](_event_.md)

# Module: "event"

## Index

### Classes

* [Event](../classes/_event_.event.md)
* [MixedEvent](../classes/_event_.mixedevent.md)

### Type aliases

* [EventParams](_event_.md#eventparams)
* [Reducer](_event_.md#reducer)

### Functions

* [createEvent](_event_.md#createevent)
* [createMixedEvent](_event_.md#createmixedevent)

## Type aliases

###  EventParams

Ƭ **EventParams**: *object*

*Defined in [src/event.ts:6](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L6)*

#### Type declaration:

* **initialValue**? : *T | null*

* **reducer**? : *[Reducer](_event_.md#reducer)‹T, U›*

* **shared**? : *undefined | false | true*

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/event.ts:4](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L4)*

#### Type declaration:

▸ (`value`: U, `prevState`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`value` | U |
`prevState` | T |

## Functions

###  createEvent

▸ **createEvent**‹**T**, **U**›(`eventDescriptor?`: [EventParams](_event_.md#eventparams)‹T, U›): *[Event](../classes/_event_.event.md)‹T, U›*

*Defined in [src/event.ts:114](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L114)*

Creates an event from a descriptor.

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventDescriptor?` | [EventParams](_event_.md#eventparams)‹T, U› | Event options. |

**Returns:** *[Event](../classes/_event_.event.md)‹T, U›*

- Event object.

___

###  createMixedEvent

▸ **createMixedEvent**‹**T**, **U**, **V**›(`events`: Events‹T, U›, `eventDescriptor?`: [EventParams](_event_.md#eventparams)‹T, V›): *[MixedEvent](../classes/_event_.mixedevent.md)‹T, U, V›*

*Defined in [src/event.ts:124](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L124)*

**Type parameters:**

▪ **T**

.

▪ **U**

▪ **V**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`events` | Events‹T, U› | Events to subscribe. |
`eventDescriptor?` | [EventParams](_event_.md#eventparams)‹T, V› | Event options. |

**Returns:** *[MixedEvent](../classes/_event_.mixedevent.md)‹T, U, V›*

- Returned mixed event.
