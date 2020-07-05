[@cobuildlab/react-simple-state](../README.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Type aliases

* [LocalObserver](_types_.md#localobserver)
* [Store](_types_.md#store)
* [Subscription](_types_.md#subscription)

## Type aliases

###  LocalObserver

Ƭ **LocalObserver**: *object*

*Defined in [src/types.ts:11](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/types.ts#L11)*

#### Type declaration:

* **callback**(): *function*

  * (`value?`: T): *void*

* **event**? : *[Event](../classes/_event_.event.md)‹T›*

* **eventName**? : *undefined | string*

* **receiveLastValue**: *boolean*

* **store**? : *[Store](_types_.md#store)*

___

###  Store

Ƭ **Store**: *object*

*Defined in [src/types.ts:3](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/types.ts#L3)*

#### Type declaration:

* **subscribe**: *Function*

___

###  Subscription

Ƭ **Subscription**: *object*

*Defined in [src/types.ts:7](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/types.ts#L7)*

#### Type declaration:

* **unsubscribe**: *Function*
