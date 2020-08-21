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

* [errorPublisher](_event_.event.md#private-errorpublisher)
* [publisher](_event_.event.md#private-publisher)
* [reducer](_event_.event.md#private-optional-readonly-reducer)
* [value](_event_.event.md#private-value)

### Methods

* [clear](_event_.event.md#clear)
* [dispatch](_event_.event.md#dispatch)
* [dispatchError](_event_.event.md#dispatcherror)
* [get](_event_.event.md#get)
* [subscribe](_event_.event.md#subscribe)
* [subscribeError](_event_.event.md#subscribeerror)

## Constructors

###  constructor

\+ **new Event**(`eventDescriptor?`: [EventParams](../modules/_event_.md#eventparams)‹T, U›): *[Event](_event_.event.md)*

*Defined in [src/event.ts:22](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`eventDescriptor?` | [EventParams](../modules/_event_.md#eventparams)‹T, U› |

**Returns:** *[Event](_event_.event.md)*

## Properties

### `Private` errorPublisher

• **errorPublisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹Error›* = new ConcretePublisher()

*Defined in [src/event.ts:22](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L22)*

___

### `Private` publisher

• **publisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹T›* = new ConcretePublisher()

*Defined in [src/event.ts:21](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L21)*

___

### `Private` `Optional` `Readonly` reducer

• **reducer**? : *[Reducer](../modules/_event_.md#reducer)‹T, U›*

*Defined in [src/event.ts:20](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L20)*

___

### `Private` value

• **value**: *T | null* = null

*Defined in [src/event.ts:19](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L19)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Defined in [src/event.ts:70](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L70)*

Removes all data from the Event store.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`dispatch` | boolean | false | -  |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`eventValue`: T | U | null): *void*

*Defined in [src/event.ts:48](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`eventValue` | T &#124; U &#124; null |

**Returns:** *void*

___

###  dispatchError

▸ **dispatchError**(`value`: Error): *void*

*Defined in [src/event.ts:58](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Error |

**Returns:** *void*

___

###  get

▸ **get**(): *T | null*

*Defined in [src/event.ts:61](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L61)*

**Returns:** *T | null*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/event.ts:30](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L30)*

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

*Defined in [src/event.ts:41](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/event.ts#L41)*

**Parameters:**

▪ **subscriber**: *function*

▸ (`value`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Error &#124; null |

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
