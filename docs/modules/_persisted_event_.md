[@cobuildlab/react-simple-state](../README.md) › ["persisted-event"](_persisted_event_.md)

# Module: "persisted-event"

## Index

### Classes

* [LocalStorage](../classes/_persisted_event_.localstorage.md)
* [PersistedEvent](../classes/_persisted_event_.persistedevent.md)

### Interfaces

* [StorageInterface](../interfaces/_persisted_event_.storageinterface.md)

### Type aliases

* [PersistedEventParams](_persisted_event_.md#persistedeventparams)
* [Reducer](_persisted_event_.md#reducer)

### Functions

* [createPersistedEvent](_persisted_event_.md#createpersistedevent)

## Type aliases

###  PersistedEventParams

Ƭ **PersistedEventParams**: *object*

*Defined in [src/persisted-event.ts:34](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L34)*

#### Type declaration:

* **initialValue**? : *T | null*

* **reducer**? : *[Reducer](_persisted_event_.md#reducer)‹T, U›*

* **storage**: *[StorageInterface](../interfaces/_persisted_event_.storageinterface.md)*

* **storageKey**: *string*

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/persisted-event.ts:4](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L4)*

#### Type declaration:

▸ (`value`: U): *T*

**Parameters:**

Name | Type |
------ | ------ |
`value` | U |

## Functions

###  createPersistedEvent

▸ **createPersistedEvent**‹**T**, **U**›(`eventDescriptor?`: [PersistedEventParams](_persisted_event_.md#persistedeventparams)‹T, U›): *[PersistedEvent](../classes/_persisted_event_.persistedevent.md)‹T, U›*

*Defined in [src/persisted-event.ts:77](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L77)*

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [PersistedEventParams](_persisted_event_.md#persistedeventparams)‹T, U› |

**Returns:** *[PersistedEvent](../classes/_persisted_event_.persistedevent.md)‹T, U›*
