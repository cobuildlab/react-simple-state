[@cobuildlab/react-simple-state](../README.md) › ["persisted-event"](../modules/_persisted_event_.md) › [LocalStorage](_persisted_event_.localstorage.md)

# Class: LocalStorage

## Hierarchy

* **LocalStorage**

## Implements

* [StorageInterface](../interfaces/_persisted_event_.storageinterface.md)

## Index

### Constructors

* [constructor](_persisted_event_.localstorage.md#constructor)

### Methods

* [getItem](_persisted_event_.localstorage.md#getitem)
* [setItem](_persisted_event_.localstorage.md#setitem)

## Constructors

###  constructor

\+ **new LocalStorage**(): *[LocalStorage](_persisted_event_.localstorage.md)*

*Defined in [src/persisted-event.ts:13](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L13)*

**Returns:** *[LocalStorage](_persisted_event_.localstorage.md)*

## Methods

###  getItem

▸ **getItem**(`key`: string): *Promise‹string | null›*

*Implementation of [StorageInterface](../interfaces/_persisted_event_.storageinterface.md)*

*Defined in [src/persisted-event.ts:19](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  setItem

▸ **setItem**(`key`: string, `value`: string): *Promise‹void›*

*Implementation of [StorageInterface](../interfaces/_persisted_event_.storageinterface.md)*

*Defined in [src/persisted-event.ts:23](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/persisted-event.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *Promise‹void›*
