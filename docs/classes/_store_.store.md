[@cobuildlab/react-simple-state](../README.md) › ["store"](../modules/_store_.md) › [Store](_store_.store.md)

# Class: Store ‹**T, U**›

## Type parameters

▪ **T**

▪ **U**: *[]*

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](_store_.store.md#constructor)

### Properties

* [errorPublisher](_store_.store.md#private-errorpublisher)
* [publisher](_store_.store.md#private-publisher)
* [reducer](_store_.store.md#private-optional-readonly-reducer)
* [value](_store_.store.md#private-value)

### Methods

* [clear](_store_.store.md#clear)
* [dispatch](_store_.store.md#dispatch)
* [dispatchError](_store_.store.md#dispatcherror)
* [get](_store_.store.md#get)
* [subscribe](_store_.store.md#subscribe)
* [subscribeError](_store_.store.md#subscribeerror)

## Constructors

###  constructor

\+ **new Store**(`eventDescriptor?`: [EventParams](../modules/_store_.md#eventparams)‹T, U›): *[Store](_store_.store.md)*

*Defined in [src/store.ts:18](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [EventParams](../modules/_store_.md#eventparams)‹T, U› |

**Returns:** *[Store](_store_.store.md)*

## Properties

### `Private` errorPublisher

• **errorPublisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹Error›* = new ConcretePublisher()

*Defined in [src/store.ts:18](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L18)*

___

### `Private` publisher

• **publisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹T›* = new ConcretePublisher()

*Defined in [src/store.ts:17](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L17)*

___

### `Private` `Optional` `Readonly` reducer

• **reducer**? : *[Reducer](../modules/_event_.md#reducer)‹T, []›*

*Defined in [src/store.ts:16](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L16)*

___

### `Private` value

• **value**: *T | null* = null

*Defined in [src/store.ts:15](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L15)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Defined in [src/store.ts:66](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L66)*

Removes all data from the Event store.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`dispatch` | boolean | false | -  |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`eventValue`: T | U | null): *void*

*Defined in [src/store.ts:44](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`eventValue` | T &#124; U &#124; null |

**Returns:** *void*

___

###  dispatchError

▸ **dispatchError**(`value`: Error): *void*

*Defined in [src/store.ts:54](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Error |

**Returns:** *void*

___

###  get

▸ **get**(): *T | null*

*Defined in [src/store.ts:57](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L57)*

**Returns:** *T | null*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/store.ts:26](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L26)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: T | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

▪`Default value`  **receiveLastValue**: *boolean*= false

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*

___

###  subscribeError

▸ **subscribeError**(`subscriber`: function): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/store.ts:37](https://github.com/cobuildlab/react-simple-state/blob/b742703/src/store.ts#L37)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Error &#124; null |

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
