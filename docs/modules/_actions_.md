[@cobuildlab/react-simple-state](../README.md) › ["actions"](_actions_.md)

# Module: "actions"

## Index

### Functions

* [createAction](_actions_.md#createaction)

## Functions

###  createAction

▸ **createAction**‹**T**, **U**, **E**, **V**›(`event`: [Event](../classes/_event_.event.md)‹T, V›, `errorEvent`: [Event](../classes/_event_.event.md)‹E›, `action`: function): *actionCallback*

*Defined in [src/actions.ts:8](https://github.com/cobuildlab/react-simple-state/blob/fa9a70c/src/actions.ts#L8)*

**Type parameters:**

▪ **T**

▪ **U**: *any[]*

▪ **E**

▪ **V**

**Parameters:**

▪ **event**: *[Event](../classes/_event_.event.md)‹T, V›*

Event to bind the action.

▪ **errorEvent**: *[Event](../classes/_event_.event.md)‹E›*

▪ **action**: *function*

Action to call.

▸ (...`params`: keyof []): *Promise‹T | V›*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | keyof [] |

**Returns:** *actionCallback*

-  Function with the binded event.
