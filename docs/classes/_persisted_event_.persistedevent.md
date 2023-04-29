[@cobuildlab/react-simple-state](../README.md) › ["persisted-event"](../modules/_persisted_event_.md) › [PersistedEvent](_persisted_event_.persistedevent.md)

# Class: PersistedEvent ‹**T, U**›

## Type parameters

▪ **T**

▪ **U**

## Hierarchy

* [Event](_event_.event.md)‹T, U›

  ↳ **PersistedEvent**

## Index

### Constructors

* [constructor](_persisted_event_.persistedevent.md#constructor)

### Properties

* [isEventEmpty](_persisted_event_.persistedevent.md#protected-iseventempty)
* [storage](_persisted_event_.persistedevent.md#private-storage)
* [storageKey](_persisted_event_.persistedevent.md#private-storagekey)
* [value](_persisted_event_.persistedevent.md#protected-value)

### Methods

* [clear](_persisted_event_.persistedevent.md#clear)
* [dispatch](_persisted_event_.persistedevent.md#dispatch)
* [get](_persisted_event_.persistedevent.md#get)
* [isEmpty](_persisted_event_.persistedevent.md#isempty)
* [subscribe](_persisted_event_.persistedevent.md#subscribe)

## Constructors

###  constructor

\+ **new PersistedEvent**(`eventDescriptor?`: [PersistedEventParams](../modules/_persisted_event_.md#persistedeventparams)‹T, U›): *[PersistedEvent](_persisted_event_.persistedevent.md)*

*Overrides [Event](_event_.event.md).[constructor](_event_.event.md#constructor)*

*Defined in [src/persisted-event.ts:39](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [PersistedEventParams](../modules/_persisted_event_.md#persistedeventparams)‹T, U› |

**Returns:** *[PersistedEvent](_persisted_event_.persistedevent.md)*

## Properties

### `Protected` isEventEmpty

• **isEventEmpty**: *boolean* = true

*Inherited from [Event](_event_.event.md).[isEventEmpty](_event_.event.md#protected-iseventempty)*

*Defined in [src/event.ts:23](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/event.ts#L23)*

___

### `Private` storage

• **storage**: *[StorageInterface](../interfaces/_persisted_event_.storageinterface.md)*

*Defined in [src/persisted-event.ts:39](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L39)*

___

### `Private` storageKey

• **storageKey**: *string*

*Defined in [src/persisted-event.ts:38](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L38)*

___

### `Protected` value

• **value**: *T | null* = null

*Inherited from [Event](_event_.event.md).[value](_event_.event.md#protected-value)*

*Defined in [src/event.ts:20](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/event.ts#L20)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Overrides [Event](_event_.event.md).[clear](_event_.event.md#clear)*

*Defined in [src/persisted-event.ts:64](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L64)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dispatch` | boolean | false |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`eventValue`: [CheckGeneric](../modules/_types_.md#checkgeneric)‹T, U› | null): *void*

*Overrides [Event](_event_.event.md).[dispatch](_event_.event.md#dispatch)*

*Defined in [src/persisted-event.ts:57](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`eventValue` | [CheckGeneric](../modules/_types_.md#checkgeneric)‹T, U› &#124; null |

**Returns:** *void*

___

###  get

▸ **get**(): *T | null*

*Inherited from [Event](_event_.event.md).[get](_event_.event.md#get)*

*Defined in [src/event.ts:51](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/event.ts#L51)*

**Returns:** *T | null*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Inherited from [Event](_event_.event.md).[isEmpty](_event_.event.md#isempty)*

*Defined in [src/event.ts:54](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/event.ts#L54)*

**Returns:** *boolean*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Inherited from [Event](_event_.event.md).[subscribe](_event_.event.md#subscribe)*

*Defined in [src/event.ts:30](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/event.ts#L30)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: T | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

▪`Default value`  **receiveLastValue**: *boolean*= false

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
