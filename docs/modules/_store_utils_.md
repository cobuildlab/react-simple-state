[@cobuildlab/react-simple-state](../README.md) › ["store-utils"](_store_utils_.md)

# Module: "store-utils"

## Index

### Functions

* [createStoreAction](_store_utils_.md#createstoreaction)

## Functions

###  createStoreAction

▸ **createStoreAction**‹**T**, **V**, **U**›(`store`: [Store](../classes/_store_.store.md)‹T, U›, `callback`: function | function, `sideEffect?`: undefined | function): *(Anonymous function)*

*Defined in [src/store-utils.ts:9](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/store-utils.ts#L9)*

**Type parameters:**

▪ **T**

▪ **V**: *unknown[]*

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`store` | [Store](../classes/_store_.store.md)‹T, U› | Event. |
`callback` | function &#124; function | Callback. |
`sideEffect?` | undefined &#124; function | Callback. |

**Returns:** *(Anonymous function)*

Reducer fucntion.
