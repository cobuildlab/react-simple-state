[@cobuildlab/react-simple-state](../README.md) › ["actions"](_actions_.md)

# Module: "actions"

## Index

### Functions

* [createAction](_actions_.md#createaction)

## Functions

###  createAction

▸ **createAction**‹**T**, **U**, **E**, **R**›(`event`: [Event](../classes/_event_.event.md)‹T, R›, `errorEvent`: [Event](../classes/_event_.event.md)‹E, E›, `action`: function): *[ActionType](../interfaces/_types_.actiontype.md)‹T, U, E, R›*

*Defined in [src/actions.ts:10](https://github.com/cobuildlab/react-simple-state/blob/b6cec23/src/actions.ts#L10)*

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

▪ **E**

▪ **R**

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T, R›*

Event to bind the action.

▪ **errorEvent**: *[Event](../classes/_event_.event.md)‹E, E›*

Event to bind on error.

▪ **action**: *function*

Action to call.

▸ (...`params`: keyof []): *Promise‹[CheckGeneric](_types_.md#checkgeneric)‹T, R››*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | keyof [] |

**Returns:** *[ActionType](../interfaces/_types_.actiontype.md)‹T, U, E, R›*

-  Function with the binded event.
