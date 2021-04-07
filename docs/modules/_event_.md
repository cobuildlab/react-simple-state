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
* [createEvents](_event_.md#createevents)

## Type aliases

###  EventParams

Ƭ **EventParams**: *object*

*Defined in [src/event.ts:11](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/event.ts#L11)*

#### Type declaration:

* **initialValue**? : *T | null*

* **reducer**? : *[Reducer](_event_.md#reducer)‹T, U›*

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/event.ts:9](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/event.ts#L9)*

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

*Defined in [src/event.ts:81](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/event.ts#L81)*

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

###  createEvents

▸ **createEvents**‹**T**, **U**›(`initalState`: T, `events`: [Reducers](_types_.md#reducers)‹T, U›): *[Events](_types_.md#events)‹T, U›*

*Defined in [src/event.ts:93](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/event.ts#L93)*

**Type parameters:**

▪ **T**

.

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`initalState` | T | Initial state. |
`events` | [Reducers](_types_.md#reducers)‹T, U› | Events inputs tu create. |

**Returns:** *[Events](_types_.md#events)‹T, U›*

- Returned events.
