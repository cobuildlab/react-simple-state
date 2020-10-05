[@cobuildlab/react-simple-state](../README.md) › ["event"](../modules/_event_.md) › [Event](_event_.event.md)

# Class: Event ‹**T, U**›

New Event Classes.

## Type parameters

▪ **T**

▪ **U**

## Hierarchy

* **Event**

## Index

### Constructors

* [constructor](_event_.event.md#constructor)

### Properties

* [publisher](_event_.event.md#private-publisher)
* [reducer](_event_.event.md#private-optional-readonly-reducer)
* [value](_event_.event.md#private-value)

### Methods

* [clear](_event_.event.md#clear)
* [dispatch](_event_.event.md#dispatch)
* [get](_event_.event.md#get)
* [subscribe](_event_.event.md#subscribe)

## Constructors

###  constructor

\+ **new Event**(`eventDescriptor?`: [EventParams](../modules/_event_.md#eventparams)‹T, U›): *[Event](_event_.event.md)*

*Defined in [src/event.ts:21](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [EventParams](../modules/_event_.md#eventparams)‹T, U› |

**Returns:** *[Event](_event_.event.md)*

## Properties

### `Private` publisher

• **publisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹T›* = new ConcretePublisher()

*Defined in [src/event.ts:21](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L21)*

___

### `Private` `Optional` `Readonly` reducer

• **reducer**? : *[Reducer](../modules/_event_.md#reducer)‹T, U›*

*Defined in [src/event.ts:20](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L20)*

___

### `Private` value

• **value**: *T | null* = null

*Defined in [src/event.ts:19](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L19)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Defined in [src/event.ts:58](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L58)*

Removes all data from the Event store.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`dispatch` | boolean | false | -  |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`eventValue`: T | U | null): *void*

*Defined in [src/event.ts:39](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`eventValue` | T &#124; U &#124; null |

**Returns:** *void*

___

###  get

▸ **get**(): *T | null*

*Defined in [src/event.ts:49](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L49)*

**Returns:** *T | null*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/event.ts:29](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/event.ts#L29)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: T | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

▪`Default value`  **receiveLastValue**: *boolean*= false

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
