[@cobuildlab/react-simple-state](../README.md) › ["actions"](_actions_.md)

# Module: "actions"

## Index

### Functions

* [createAction](_actions_.md#createaction)

## Functions

###  createAction

▸ **createAction**‹**T**, **V**, **U**›(`event`: [Event](../classes/_event_.event.md)‹T, V›, `action`: function): *(Anonymous function)*

*Defined in [src/actions.ts:8](https://github.com/cobuildlab/react-simple-state/blob/d47d397/src/actions.ts#L8)*

**Type parameters:**

▪ **T**

▪ **V**

▪ **U**: *[]*

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T, V›*

Event to bind the action.

▪ **action**: *function*

Action to call.

▸ (...`params`: keyof []): *Promise‹T | V›*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | keyof [] |

**Returns:** *(Anonymous function)*

-  Function with the binded event.
