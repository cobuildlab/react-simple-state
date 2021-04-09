[@cobuildlab/react-simple-state](../README.md) › ["pub-sub"](../modules/_pub_sub_.md) › [ConcretePublisher](_pub_sub_.concretepublisher.md)

# Class: ConcretePublisher ‹**T**›

A simple publisher.

## Type parameters

▪ **T**

## Hierarchy

* **ConcretePublisher**

## Implements

* [Publisher](../interfaces/_pub_sub_.publisher.md)‹T›

## Index

### Properties

* [subscribers](_pub_sub_.concretepublisher.md#subscribers)

### Methods

* [notify](_pub_sub_.concretepublisher.md#notify)
* [subscribe](_pub_sub_.concretepublisher.md#subscribe)

## Properties

###  subscribers

• **subscribers**: *[Subscriber](../interfaces/_pub_sub_.subscriber.md)‹T›[]* = []

*Implementation of [Publisher](../interfaces/_pub_sub_.publisher.md).[subscribers](../interfaces/_pub_sub_.publisher.md#subscribers)*

*Defined in [src/pub-sub.ts:45](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/pub-sub.ts#L45)*

## Methods

###  notify

▸ **notify**(`value`: T | null): *void*

*Implementation of [Publisher](../interfaces/_pub_sub_.publisher.md)*

*Defined in [src/pub-sub.ts:56](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/pub-sub.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`subscriber`: [Subscriber](../interfaces/_pub_sub_.subscriber.md)‹T›): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Implementation of [Publisher](../interfaces/_pub_sub_.publisher.md)*

*Defined in [src/pub-sub.ts:47](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/pub-sub.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](../interfaces/_pub_sub_.subscriber.md)‹T› |

**Returns:** *[Subscription](../interfaces/_pub_sub_.subscription.md)*
