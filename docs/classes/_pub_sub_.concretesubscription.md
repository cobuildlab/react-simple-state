[@cobuildlab/react-simple-state](../README.md) › ["pub-sub"](../modules/_pub_sub_.md) › [ConcreteSubscription](_pub_sub_.concretesubscription.md)

# Class: ConcreteSubscription ‹**T**›

An Object that represent the subscription to a Publisher

## Type parameters

▪ **T**

## Hierarchy

* **ConcreteSubscription**

## Implements

* [Subscription](../interfaces/_pub_sub_.subscription.md)

## Index

### Constructors

* [constructor](_pub_sub_.concretesubscription.md#constructor)

### Properties

* [publisher](_pub_sub_.concretesubscription.md#private-readonly-publisher)
* [subscriber](_pub_sub_.concretesubscription.md#private-readonly-subscriber)

### Methods

* [unsubscribe](_pub_sub_.concretesubscription.md#unsubscribe)

## Constructors

###  constructor

\+ **new ConcreteSubscription**(`publisher`: [Publisher](../interfaces/_pub_sub_.publisher.md)‹T›, `subscriber`: [Subscriber](../interfaces/_pub_sub_.subscriber.md)‹T›): *[ConcreteSubscription](_pub_sub_.concretesubscription.md)*

*Defined in [src/pub-sub.ts:22](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/pub-sub.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`publisher` | [Publisher](../interfaces/_pub_sub_.publisher.md)‹T› |
`subscriber` | [Subscriber](../interfaces/_pub_sub_.subscriber.md)‹T› |

**Returns:** *[ConcreteSubscription](_pub_sub_.concretesubscription.md)*

## Properties

### `Private` `Readonly` publisher

• **publisher**: *[Publisher](../interfaces/_pub_sub_.publisher.md)‹T› | null* = null

*Defined in [src/pub-sub.ts:21](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/pub-sub.ts#L21)*

___

### `Private` `Readonly` subscriber

• **subscriber**: *[Subscriber](../interfaces/_pub_sub_.subscriber.md)‹T› | null* = null

*Defined in [src/pub-sub.ts:22](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/pub-sub.ts#L22)*

## Methods

###  unsubscribe

▸ **unsubscribe**(): *void*

*Implementation of [Subscription](../interfaces/_pub_sub_.subscription.md)*

*Defined in [src/pub-sub.ts:29](https://github.com/cobuildlab/react-simple-state/blob/8e6ada3/src/pub-sub.ts#L29)*

**Returns:** *void*
