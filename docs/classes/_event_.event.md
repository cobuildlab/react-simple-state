[@cobuildlab/react-simple-state](../README.md) › ["event"](../modules/_event_.md) › [Event](_event_.event.md)

# Class: Event ‹**T**›

New Event Classes

## Type parameters

▪ **T**

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

\+ **new Event**(`eventDescriptor?`: [EventParams](../modules/_event_.md#eventparams)‹T›): *[Event](_event_.event.md)*

*Defined in [src/event.ts:16](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [EventParams](../modules/_event_.md#eventparams)‹T› |

**Returns:** *[Event](_event_.event.md)*

## Properties

### `Private` publisher

• **publisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹T›* = new ConcretePublisher()

*Defined in [src/event.ts:16](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L16)*

___

### `Private` `Optional` `Readonly` reducer

• **reducer**? : *[Reducer](../modules/_event_.md#reducer)‹T›*

*Defined in [src/event.ts:15](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L15)*

___

### `Private` value

• **value**: *T | null* = null

*Defined in [src/event.ts:14](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L14)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Defined in [src/event.ts:48](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L48)*

Removes all data from the Event store

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dispatch` | boolean | false |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`value`: T | null): *void*

*Defined in [src/event.ts:33](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

**Returns:** *void*

___

###  get

▸ **get**(): *T | null*

*Defined in [src/event.ts:41](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L41)*

**Returns:** *T | null*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/event.ts:24](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/event.ts#L24)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: T | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

▪`Default value`  **receiveLastValue**: *boolean*= false

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
