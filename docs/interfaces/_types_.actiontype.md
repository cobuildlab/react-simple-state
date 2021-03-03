[@cobuildlab/react-simple-state](../README.md) › ["types"](../modules/_types_.md) › [ActionType](_types_.actiontype.md)

# Interface: ActionType ‹**T, U, E**›

## Type parameters

▪ **T**

▪ **U**: *[Arr](../modules/_types_.md#arr)*

▪ **E**

## Hierarchy

* **ActionType**

## Callable

▸ (...`params_0`: U): *Promise‹T | object›*

*Defined in [src/types.ts:18](https://github.com/cobuildlab/react-simple-state/blob/46e6b47/src/types.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`...params_0` | U |

**Returns:** *Promise‹T | object›*

## Index

### Properties

* [errorEvent](_types_.actiontype.md#errorevent)
* [event](_types_.actiontype.md#event)
* [isAction](_types_.actiontype.md#isaction)

## Properties

###  errorEvent

• **errorEvent**: *[Event](../classes/_event_.event.md)‹E, unknown›*

*Defined in [src/types.ts:27](https://github.com/cobuildlab/react-simple-state/blob/46e6b47/src/types.ts#L27)*

___

###  event

• **event**: *[Event](../classes/_event_.event.md)‹T, unknown›*

*Defined in [src/types.ts:26](https://github.com/cobuildlab/react-simple-state/blob/46e6b47/src/types.ts#L26)*

___

###  isAction

• **isAction**: *boolean*

*Defined in [src/types.ts:25](https://github.com/cobuildlab/react-simple-state/blob/46e6b47/src/types.ts#L25)*
