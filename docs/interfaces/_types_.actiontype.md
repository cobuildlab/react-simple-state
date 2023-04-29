[@cobuildlab/react-simple-state](../README.md) › ["types"](../modules/_types_.md) › [ActionType](_types_.actiontype.md)

# Interface: ActionType ‹**T, U, E, R**›

## Type parameters

▪ **T**

▪ **U**: *[Arr](../modules/_types_.md#arr)*

▪ **E**

▪ **R**

## Hierarchy

* **ActionType**

## Callable

▸ (...`params_0`: U): *Promise‹[CheckGeneric](../modules/_types_.md#checkgeneric)‹T, R› | object›*

*Defined in [src/types.ts:19](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/types.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`...params_0` | U |

**Returns:** *Promise‹[CheckGeneric](../modules/_types_.md#checkgeneric)‹T, R› | object›*

## Index

### Properties

* [errorEvent](_types_.actiontype.md#errorevent)
* [event](_types_.actiontype.md#event)
* [isAction](_types_.actiontype.md#isaction)

## Properties

###  errorEvent

• **errorEvent**: *[Event](../classes/_event_.event.md)‹E, E›*

*Defined in [src/types.ts:28](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/types.ts#L28)*

___

###  event

• **event**: *[Event](../classes/_event_.event.md)‹T, R›*

*Defined in [src/types.ts:27](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/types.ts#L27)*

___

###  isAction

• **isAction**: *boolean*

*Defined in [src/types.ts:26](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/types.ts#L26)*
