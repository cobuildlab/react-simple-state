[@cobuildlab/react-simple-state](../README.md) › ["event"](../modules/_event_.md) › [MixedEvent](_event_.mixedevent.md)

# Class: MixedEvent ‹**T, U, V**›

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* [Event](_event_.event.md)‹T, V›

  ↳ **MixedEvent**

## Index

### Constructors

* [constructor](_event_.mixedevent.md#constructor)

### Properties

* [events](_event_.mixedevent.md#events)
* [isShared](_event_.mixedevent.md#isshared)

### Methods

* [clear](_event_.mixedevent.md#clear)
* [dispatch](_event_.mixedevent.md#dispatch)
* [get](_event_.mixedevent.md#get)
* [isEmpty](_event_.mixedevent.md#isempty)
* [setup](_event_.mixedevent.md#private-setup)
* [sharedDispatch](_event_.mixedevent.md#shareddispatch)
* [subscribe](_event_.mixedevent.md#subscribe)

## Constructors

###  constructor

\+ **new MixedEvent**(`events`: Events‹T, U›, `eventDescriptor?`: [EventParams](../modules/_event_.md#eventparams)‹T, V›): *[MixedEvent](_event_.mixedevent.md)*

*Overrides [Event](_event_.event.md).[constructor](_event_.event.md#constructor)*

*Defined in [src/event.ts:76](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Events‹T, U› |
`eventDescriptor?` | [EventParams](../modules/_event_.md#eventparams)‹T, V› |

**Returns:** *[MixedEvent](_event_.mixedevent.md)*

## Properties

###  events

• **events**: *Events‹T, U›*

*Defined in [src/event.ts:76](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L76)*

___

###  isShared

• **isShared**: *boolean* = false

*Inherited from [Event](_event_.event.md).[isShared](_event_.event.md#isshared)*

*Defined in [src/event.ts:21](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L21)*

## Methods

###  clear

▸ **clear**(`dispatch`: boolean): *void*

*Inherited from [Event](_event_.event.md).[clear](_event_.event.md#clear)*

*Defined in [src/event.ts:65](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L65)*

Removes all data from the Event store.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`dispatch` | boolean | false | -  |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`eventValue`: [CheckGeneric](../modules/_types_.md#checkgeneric)‹T, V› | null): *void*

*Inherited from [Event](_event_.event.md).[dispatch](_event_.event.md#dispatch)*

*Defined in [src/event.ts:39](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`eventValue` | [CheckGeneric](../modules/_types_.md#checkgeneric)‹T, V› &#124; null |

**Returns:** *void*

___

###  get

▸ **get**(): *T | null*

*Inherited from [Event](_event_.event.md).[get](_event_.event.md#get)*

*Defined in [src/event.ts:54](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L54)*

**Returns:** *T | null*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Inherited from [Event](_event_.event.md).[isEmpty](_event_.event.md#isempty)*

*Defined in [src/event.ts:57](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L57)*

**Returns:** *boolean*

___

### `Private` setup

▸ **setup**(): *void*

*Defined in [src/event.ts:85](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L85)*

**Returns:** *void*

___

###  sharedDispatch

▸ **sharedDispatch**(`value`: T | null): *void*

*Inherited from [Event](_event_.event.md).[sharedDispatch](_event_.event.md#shareddispatch)*

*Defined in [src/event.ts:50](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/event.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`subscriber`: function, `receiveLastValue`: boolean): *[Subscription](../interfaces/_pub_sub_.subscription.md)*

*Inherited from [Event](_event_.event.md).[subscribe](_event_.event.md#subscribe)*

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
