[@cobuildlab/react-simple-state](../README.md) › ["store"](../modules/_store_.md) › [Store](_store_.store.md)

# Class: Store ‹**T, R**›

## Type parameters

▪ **T**

▪ **R**

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](_store_.store.md#constructor)

### Properties

* [errorPublisher](_store_.store.md#private-errorpublisher)
* [initialValue](_store_.store.md#private-initialvalue)
* [publisher](_store_.store.md#private-publisher)
* [reducer](_store_.store.md#private-reducer)
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

\+ **new Store**(`eventDescriptor`: [StoreParams](../modules/_store_.md#storeparams)‹T, R›): *[Store](_store_.store.md)*

*Defined in [src/store.ts:20](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor` | [StoreParams](../modules/_store_.md#storeparams)‹T, R› |

**Returns:** *[Store](_store_.store.md)*

## Properties

### `Private` errorPublisher

• **errorPublisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹Error›* = new ConcretePublisher()

*Defined in [src/store.ts:19](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L19)*

___

### `Private` initialValue

• **initialValue**: *T*

*Defined in [src/store.ts:17](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L17)*

___

### `Private` publisher

• **publisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹T›* = new ConcretePublisher()

*Defined in [src/store.ts:18](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L18)*

___

### `Private` reducer

• **reducer**: *[Reducer](../modules/_store_.md#reducer)‹T, R› | undefined*

*Defined in [src/store.ts:20](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L20)*

___

### `Private` value

• **value**: *T*

*Defined in [src/store.ts:16](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L16)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Defined in [src/store.ts:70](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L70)*

Removes all data from the Event store.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`dispatch` | boolean | false | -  |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`eventValue`: [CheckDispatchType](../modules/_store_.md#checkdispatchtype)‹T, R›): *void*

*Defined in [src/store.ts:47](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`eventValue` | [CheckDispatchType](../modules/_store_.md#checkdispatchtype)‹T, R› |

**Returns:** *void*

___

###  dispatchError

▸ **dispatchError**(`value`: Error): *void*

*Defined in [src/store.ts:57](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Error |

**Returns:** *void*

___

###  get

▸ **get**(): *T*

*Defined in [src/store.ts:61](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L61)*

**Returns:** *T*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/store.ts:29](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L29)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Default value`  **receiveLastValue**: *boolean*= false

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*

___

###  subscribeError

▸ **subscribeError**(`subscriber`: function): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/store.ts:40](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store.ts#L40)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Error |

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
