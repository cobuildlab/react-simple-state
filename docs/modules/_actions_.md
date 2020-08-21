[@cobuildlab/react-simple-state](../README.md) › ["actions"](_actions_.md)

# Module: "actions"

## Index

### Functions

* [createAction](_actions_.md#createaction)

## Functions

###  createAction

▸ **createAction**‹**T**, **U**›(`event`: [Event](../classes/_event_.event.md)‹T›, `action`: function): *(Anonymous function)*

*Defined in [src/actions.ts:8](https://github.com/cobuildlab/react-simple-state/blob/d032904/src/actions.ts#L8)*

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T›*

Event to bind the action.

▪ **action**: *function*

Action to call.

▸ (...`params`: keyof []): *Promise‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | keyof [] |

**Returns:** *(Anonymous function)*

-  Function with the binded event.
