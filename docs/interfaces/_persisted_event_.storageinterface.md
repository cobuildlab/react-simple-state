[@cobuildlab/react-simple-state](../README.md) › ["persisted-event"](../modules/_persisted_event_.md) › [StorageInterface](_persisted_event_.storageinterface.md)

# Interface: StorageInterface

## Hierarchy

* **StorageInterface**

## Implemented by

* [LocalStorage](../classes/_persisted_event_.localstorage.md)

## Index

### Methods

* [getItem](_persisted_event_.storageinterface.md#getitem)
* [setItem](_persisted_event_.storageinterface.md#setitem)

## Methods

###  getItem

▸ **getItem**(`key`: string): *Promise‹string | null›*

*Defined in [src/persisted-event.ts:10](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  setItem

▸ **setItem**(`key`: string, `value`: string): *Promise‹void›*

*Defined in [src/persisted-event.ts:8](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *Promise‹void›*
