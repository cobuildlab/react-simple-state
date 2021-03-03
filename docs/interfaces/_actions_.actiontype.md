[@cobuildlab/react-simple-state](../README.md) › ["actions"](../modules/_actions_.md) › [ActionType](_actions_.actiontype.md)

# Interface: ActionType ‹**T, U, E**›

## Type parameters

▪ **T**

▪ **U**: *any[]*

▪ **E**

## Hierarchy

* **ActionType**

## Callable

▸ (...`params_0`: U): *Promise‹T | object›*

*Defined in [src/actions.ts:2](https://github.com/cobuildlab/react-simple-state/blob/53910e6/src/actions.ts#L2)*

**Parameters:**

Name | Type |
------ | ------ |
`...params_0` | U |

**Returns:** *Promise‹T | object›*

## Index

### Properties

* [errorEvent](_actions_.actiontype.md#errorevent)
* [event](_actions_.actiontype.md#event)
* [isAction](_actions_.actiontype.md#isaction)

## Properties

###  errorEvent

• **errorEvent**: *[Event](../classes/_event_.event.md)‹E, unknown›*

*Defined in [src/actions.ts:11](https://github.com/cobuildlab/react-simple-state/blob/53910e6/src/actions.ts#L11)*

___

###  event

• **event**: *[Event](../classes/_event_.event.md)‹T, unknown›*

*Defined in [src/actions.ts:10](https://github.com/cobuildlab/react-simple-state/blob/53910e6/src/actions.ts#L10)*

___

###  isAction

• **isAction**: *boolean*

*Defined in [src/actions.ts:9](https://github.com/cobuildlab/react-simple-state/blob/53910e6/src/actions.ts#L9)*
