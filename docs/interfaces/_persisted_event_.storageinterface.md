[@cobuildlab/react-simple-state](../README.md) › ["persisted-event"](../modules/_persisted_event_.md) › [StorageInterface](_persisted_event_.storageinterface.md)

# Interface: StorageInterface

## Hierarchy

* **StorageInterface**

## Implemented by

* [LocalStorage](../classes/_persisted_event_.localstorage.md)

## Index

### Methods

* [getItem](_persisted_event_.storageinterface.md#getitem)
* [removeItem](_persisted_event_.storageinterface.md#removeitem)
* [setItem](_persisted_event_.storageinterface.md#setitem)

## Methods

###  getItem

▸ **getItem**(`key`: string): *Promise‹string | null›*

*Defined in [src/persisted-event.ts:9](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  removeItem

▸ **removeItem**(`key`: string): *Promise‹void›*

*Defined in [src/persisted-event.ts:11](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  setItem

▸ **setItem**(`key`: string, `value`: string): *Promise‹void›*

*Defined in [src/persisted-event.ts:7](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *Promise‹void›*
