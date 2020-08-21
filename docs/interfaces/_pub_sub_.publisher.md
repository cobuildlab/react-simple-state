[@cobuildlab/react-simple-state](../README.md) › ["pub-sub"](../modules/_pub_sub_.md) › [Publisher](_pub_sub_.publisher.md)

# Interface: Publisher ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **Publisher**

## Implemented by

* [ConcretePublisher](../classes/_pub_sub_.concretepublisher.md)

## Index

### Properties

* [subscribers](_pub_sub_.publisher.md#subscribers)

### Methods

* [notify](_pub_sub_.publisher.md#notify)
* [subscribe](_pub_sub_.publisher.md#subscribe)

## Properties

###  subscribers

• **subscribers**: *[Subscriber](_pub_sub_.subscriber.md)‹T›[]*

*Defined in [src/pub-sub.ts:10](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/pub-sub.ts#L10)*

## Methods

###  notify

▸ **notify**(`value`: T | null): *void*

*Defined in [src/pub-sub.ts:14](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/pub-sub.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`subscriber`: [Subscriber](_pub_sub_.subscriber.md)‹T›): *[Subscription](_pub_sub_.subscription.md)*

*Defined in [src/pub-sub.ts:12](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/pub-sub.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](_pub_sub_.subscriber.md)‹T› |

**Returns:** *[Subscription](_pub_sub_.subscription.md)*
