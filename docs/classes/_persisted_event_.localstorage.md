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
* [removeItem](_persisted_event_.localstorage.md#removeitem)
* [setItem](_persisted_event_.localstorage.md#setitem)

## Constructors

###  constructor

\+ **new LocalStorage**(): *[LocalStorage](_persisted_event_.localstorage.md)*

*Defined in [src/persisted-event.ts:14](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L14)*

**Returns:** *[LocalStorage](_persisted_event_.localstorage.md)*

## Methods

###  getItem

▸ **getItem**(`key`: string): *Promise‹string | null›*

*Implementation of [StorageInterface](../interfaces/_persisted_event_.storageinterface.md)*

*Defined in [src/persisted-event.ts:20](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  removeItem

▸ **removeItem**(`key`: string): *Promise‹void›*

*Implementation of [StorageInterface](../interfaces/_persisted_event_.storageinterface.md)*

*Defined in [src/persisted-event.ts:28](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  setItem

▸ **setItem**(`key`: string, `value`: string): *Promise‹void›*

*Implementation of [StorageInterface](../interfaces/_persisted_event_.storageinterface.md)*

*Defined in [src/persisted-event.ts:24](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/persisted-event.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *Promise‹void›*
