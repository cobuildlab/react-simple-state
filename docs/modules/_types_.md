[@cobuildlab/react-simple-state](../README.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Type aliases

* [LocalObserver](_types_.md#localobserver)
* [Store](_types_.md#store)

## Type aliases

###  LocalObserver

Ƭ **LocalObserver**: *object*

*Defined in [src/types.ts:7](https://github.com/cobuildlab/react-simple-state/blob/d032904/src/types.ts#L7)*

#### Type declaration:

* **callback**(): *function*

  * (`value?`: T | null): *void*

* **event**? : *[Event](../classes/_event_.event.md)‹T›*

* **eventName**? : *undefined | string*

* **receiveLastValue**: *boolean*

* **store**? : *[Store](_types_.md#store)*

___

###  Store

Ƭ **Store**: *object*

*Defined in [src/types.ts:3](https://github.com/cobuildlab/react-simple-state/blob/d032904/src/types.ts#L3)*

#### Type declaration:

* **subscribe**: *Function*
