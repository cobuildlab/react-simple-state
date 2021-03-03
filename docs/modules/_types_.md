[@cobuildlab/react-simple-state](../README.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Interfaces

* [ActionType](../interfaces/_types_.actiontype.md)
* [UseFetchActionOptions](../interfaces/_types_.usefetchactionoptions.md)

### Type aliases

* [Arr](_types_.md#arr)
* [LocalObserver](_types_.md#localobserver)
* [Store](_types_.md#store)
* [UseActionOptions](_types_.md#useactionoptions)
* [UseCallActionReturn](_types_.md#usecallactionreturn)
* [UseFetchActionReturn](_types_.md#usefetchactionreturn)

## Type aliases

###  Arr

Ƭ **Arr**: *keyof any[]*

*Defined in [src/types.ts:17](https://github.com/cobuildlab/react-simple-state/blob/69c0983/src/types.ts#L17)*

___

###  LocalObserver

Ƭ **LocalObserver**: *object*

*Defined in [src/types.ts:8](https://github.com/cobuildlab/react-simple-state/blob/69c0983/src/types.ts#L8)*

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

*Defined in [src/types.ts:3](https://github.com/cobuildlab/react-simple-state/blob/69c0983/src/types.ts#L3)*

#### Type declaration:

* **subscribe**: *Function*

___

###  UseActionOptions

Ƭ **UseActionOptions**: *object*

*Defined in [src/types.ts:30](https://github.com/cobuildlab/react-simple-state/blob/69c0983/src/types.ts#L30)*

#### Type declaration:

* **onCompleted**? : *undefined | function*

* **onError**? : *undefined | function*

___

###  UseCallActionReturn

Ƭ **UseCallActionReturn**: *[]*

*Defined in [src/types.ts:46](https://github.com/cobuildlab/react-simple-state/blob/69c0983/src/types.ts#L46)*

___

###  UseFetchActionReturn

Ƭ **UseFetchActionReturn**: *[]*

*Defined in [src/types.ts:38](https://github.com/cobuildlab/react-simple-state/blob/69c0983/src/types.ts#L38)*
