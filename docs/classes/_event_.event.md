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

* [reducer](_event_.event.md#private-optional-readonly-reducer)
* [subject](_event_.event.md#private-subject)
* [value](_event_.event.md#private-optional-value)

### Methods

* [clear](_event_.event.md#clear)
* [dispatch](_event_.event.md#dispatch)
* [get](_event_.event.md#get)
* [subscribe](_event_.event.md#subscribe)

## Constructors

###  constructor

\+ **new Event**(`eventDescriptor?`: [EventParams](../modules/_event_.md#eventparams)‹T›): *[Event](_event_.event.md)*

*Defined in [src/event.ts:18](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [EventParams](../modules/_event_.md#eventparams)‹T› |

**Returns:** *[Event](_event_.event.md)*

## Properties

### `Private` `Optional` `Readonly` reducer

• **reducer**? : *[Reducer](../modules/_event_.md#reducer)‹T›*

*Defined in [src/event.ts:17](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L17)*

___

### `Private` subject

• **subject**: *Publisher‹T›* = new Publisher()

*Defined in [src/event.ts:18](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L18)*

___

### `Private` `Optional` value

• **value**? : *T* = undefined

*Defined in [src/event.ts:16](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L16)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Defined in [src/event.ts:49](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L49)*

Removes all data from the Event store

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dispatch` | boolean | false |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`value?`: T): *void*

*Defined in [src/event.ts:34](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | T |

**Returns:** *void*

___

###  get

▸ **get**(): *T | undefined*

*Defined in [src/event.ts:42](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L42)*

**Returns:** *T | undefined*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *Subscription*

*Defined in [src/event.ts:25](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/event.ts#L25)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value?`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | T |

▪`Default value`  **receiveLastValue**: *boolean*= false

**Returns:** *Subscription*
