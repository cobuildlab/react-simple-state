[@cobuildlab/react-simple-state](../README.md) › ["store-hooks"](_store_hooks_.md)

# Module: "store-hooks"

## Index

### Functions

* [useStore](_store_hooks_.md#usestore)
* [useStoreError](_store_hooks_.md#usestoreerror)
* [useStoreErrorSubscription](_store_hooks_.md#usestoreerrorsubscription)
* [useStoreSubcription](_store_hooks_.md#usestoresubcription)

## Functions

###  useStore

▸ **useStore**‹**T**›(`store`: [Store](../classes/_store_.store.md)‹T›): *T*

*Defined in [src/store-hooks.ts:90](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store-hooks.ts#L90)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`store` | [Store](../classes/_store_.store.md)‹T› | Store to subscribe. |

**Returns:** *T*

- Resulto object from the store.

___

###  useStoreError

▸ **useStoreError**‹**T**›(`store`: [Store](../classes/_store_.store.md)‹T›): *Error | null*

*Defined in [src/store-hooks.ts:104](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store-hooks.ts#L104)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`store` | [Store](../classes/_store_.store.md)‹T› | Store to subscribe. |

**Returns:** *Error | null*

- Resulto object from the store.

___

###  useStoreErrorSubscription

▸ **useStoreErrorSubscription**‹**T**›(`store`: [Store](../classes/_store_.store.md)‹T›, `errorcCallback`: function): *void*

*Defined in [src/store-hooks.ts:61](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store-hooks.ts#L61)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **store**: *[Store](../classes/_store_.store.md)‹T›*

Store to subscribe.

▪ **errorcCallback**: *function*

Function to call on each error dipatch.

▸ (`data`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Error |

**Returns:** *void*

___

###  useStoreSubcription

▸ **useStoreSubcription**‹**T**›(`store`: [Store](../classes/_store_.store.md)‹T›, `callback?`: undefined | function, `errorCallback?`: undefined | function): *void*

*Defined in [src/store-hooks.ts:9](https://github.com/cobuildlab/react-simple-state/blob/a61bd53/src/store-hooks.ts#L9)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`store` | [Store](../classes/_store_.store.md)‹T› | Store to subscribe. |
`callback?` | undefined &#124; function | Function to call on each dipatch. |
`errorCallback?` | undefined &#124; function | Function to call on each error dipatch.  |

**Returns:** *void*
