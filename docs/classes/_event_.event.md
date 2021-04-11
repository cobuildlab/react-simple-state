[@cobuildlab/react-simple-state](../README.md) › ["event"](../modules/_event_.md) › [Event](_event_.event.md)

# Class: Event ‹**T, U**›

New Event Classes.

## Type parameters

▪ **T**

▪ **U**

## Hierarchy

* **Event**

  ↳ [MixedEvent](_event_.mixedevent.md)

## Index

### Constructors

* [constructor](_event_.event.md#constructor)

### Properties

* [isEventEmpty](_event_.event.md#private-iseventempty)
* [isShared](_event_.event.md#isshared)
* [publisher](_event_.event.md#private-publisher)
* [reducer](_event_.event.md#private-optional-readonly-reducer)
* [sharedValue](_event_.event.md#private-sharedvalue)
* [value](_event_.event.md#private-value)

### Methods

* [clear](_event_.event.md#clear)
* [dispatch](_event_.event.md#dispatch)
* [get](_event_.event.md#get)
* [isEmpty](_event_.event.md#isempty)
* [sharedDispatch](_event_.event.md#shareddispatch)
* [subscribe](_event_.event.md#subscribe)

## Constructors

###  constructor

\+ **new Event**(`eventDescriptor?`: [EventParams](../modules/_event_.md#eventparams)‹T, U›): *[Event](_event_.event.md)*

*Defined in [src/event.ts:21](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [EventParams](../modules/_event_.md#eventparams)‹T, U› |

**Returns:** *[Event](_event_.event.md)*

## Properties

### `Private` isEventEmpty

• **isEventEmpty**: *boolean* = true

*Defined in [src/event.ts:20](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L20)*

___

###  isShared

• **isShared**: *boolean* = false

*Defined in [src/event.ts:21](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L21)*

___

### `Private` publisher

• **publisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹T›* = new ConcretePublisher()

*Defined in [src/event.ts:19](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L19)*

___

### `Private` `Optional` `Readonly` reducer

• **reducer**? : *[Reducer](../modules/_event_.md#reducer)‹T, U›*

*Defined in [src/event.ts:18](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L18)*

___

### `Private` sharedValue

• **sharedValue**: *T | null* = null

*Defined in [src/event.ts:17](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L17)*

___

### `Private` value

• **value**: *T | null* = null

*Defined in [src/event.ts:16](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L16)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Defined in [src/event.ts:65](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L65)*

Removes all data from the Event store.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`dispatch` | boolean | false | -  |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`eventValue`: [CheckGeneric](../modules/_types_.md#checkgeneric)‹T, U› | null): *void*

*Defined in [src/event.ts:39](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`eventValue` | [CheckGeneric](../modules/_types_.md#checkgeneric)‹T, U› &#124; null |

**Returns:** *void*

___

###  get

▸ **get**(): *T | null*

*Defined in [src/event.ts:54](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L54)*

**Returns:** *T | null*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Defined in [src/event.ts:57](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L57)*

**Returns:** *boolean*

___

###  sharedDispatch

▸ **sharedDispatch**(`value`: T | null): *void*

*Defined in [src/event.ts:50](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/event.ts:31](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L31)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: T | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

▪`Default value`  **receiveLastValue**: *boolean*= false

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
