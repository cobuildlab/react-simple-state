[@cobuildlab/react-simple-state](../README.md) › ["actions"](_actions_.md)

# Module: "actions"

## Index

### Interfaces

* [ActionType](../interfaces/_actions_.actiontype.md)

### Functions

* [createAction](_actions_.md#createaction)

## Functions

###  createAction

▸ **createAction**‹**T**, **U**, **E**›(`event`: [Event](../classes/_event_.event.md)‹T›, `errorEvent`: [Event](../classes/_event_.event.md)‹E›, `action`: function): *[ActionType](../interfaces/_actions_.actiontype.md)‹T, U, E›*

*Defined in [src/actions.ts:18](https://github.com/cobuildlab/react-simple-state/blob/53910e6/src/actions.ts#L18)*

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

▪ **E**

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T›*

Event to bind the action.

▪ **errorEvent**: *[Event](../classes/_event_.event.md)‹E›*

▪ **action**: *function*

Action to call.

▸ (...`params`: keyof []): *Promise‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | keyof [] |

**Returns:** *[ActionType](../interfaces/_actions_.actiontype.md)‹T, U, E›*

-  Function with the binded event.
