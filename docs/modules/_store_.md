[@cobuildlab/react-simple-state](../README.md) › ["store"](_store_.md)

# Module: "store"

## Index

### Classes

* [Store](../classes/_store_.store.md)

### Type aliases

* [CheckDispatchType](_store_.md#checkdispatchtype)
* [Reducer](_store_.md#reducer)
* [StoreParams](_store_.md#storeparams)

### Functions

* [createStore](_store_.md#createstore)

## Type aliases

###  CheckDispatchType

Ƭ **CheckDispatchType**: *R extends unknown ? T : R*

*Defined in [src/store.ts:9](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/store.ts#L9)*

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/store.ts:8](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/store.ts#L8)*

#### Type declaration:

▸ (`prevState`: T, `newState`: R): *T*

**Parameters:**

Name | Type |
------ | ------ |
`prevState` | T |
`newState` | R |

___

###  StoreParams

Ƭ **StoreParams**: *object*

*Defined in [src/store.ts:11](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/store.ts#L11)*

#### Type declaration:

* **initialValue**: *T*

* **reducer**? : *[Reducer](_store_.md#reducer)‹T, R›*

## Functions

###  createStore

▸ **createStore**‹**T**, **U**›(`storeDescriptor`: [StoreParams](_store_.md#storeparams)‹T, U›): *[Store](../classes/_store_.store.md)‹T, U›*

*Defined in [src/store.ts:85](https://github.com/cobuildlab/react-simple-state/blob/e6423d5/src/store.ts#L85)*

Creates an event from a descriptor.

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`storeDescriptor` | [StoreParams](_store_.md#storeparams)‹T, U› | Event options. |

**Returns:** *[Store](../classes/_store_.store.md)‹T, U›*

- Event object.
