[@cobuildlab/react-simple-state](../README.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Interfaces

* [ActionType](../interfaces/_types_.actiontype.md)
* [UseFetchActionOptions](../interfaces/_types_.usefetchactionoptions.md)

### Type aliases

* [Arr](_types_.md#arr)
* [CheckGeneric](_types_.md#checkgeneric)
* [Dispatchs](_types_.md#dispatchs)
* [EventHookParams](_types_.md#eventhookparams)
* [Events](_types_.md#events)
* [LocalObserver](_types_.md#localobserver)
* [Reducers](_types_.md#reducers)
* [Store](_types_.md#store)
* [UseActionOptions](_types_.md#useactionoptions)
* [UseCallActionReturn](_types_.md#usecallactionreturn)
* [UseFetchActionReturn](_types_.md#usefetchactionreturn)
* [useEventReturn](_types_.md#useeventreturn)

## Type aliases

###  Arr

Ƭ **Arr**: *keyof any[]*

*Defined in [src/types.ts:17](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L17)*

___

###  CheckGeneric

Ƭ **CheckGeneric**: *T extends R ? T : R*

*Defined in [src/types.ts:18](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L18)*

___

###  Dispatchs

Ƭ **Dispatchs**: *object*

*Defined in [src/types.ts:71](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L71)*

#### Type declaration:

___

###  EventHookParams

Ƭ **EventHookParams**: *object*

*Defined in [src/types.ts:55](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L55)*

#### Type declaration:

* **initialValue**? : *U*

* **reducer**? : *undefined | function*

___

###  Events

Ƭ **Events**: *object*

*Defined in [src/types.ts:67](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L67)*

#### Type declaration:

___

###  LocalObserver

Ƭ **LocalObserver**: *object*

*Defined in [src/types.ts:8](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L8)*

#### Type declaration:

* **callback**(): *function*

  * (`value?`: T | null): *void*

* **event**? : *[Event](../classes/_event_.event.md)‹T›*

* **eventName**? : *undefined | string*

* **receiveLastValue**: *boolean*

* **store**? : *[Store](_types_.md#store)*

___

###  Reducers

Ƭ **Reducers**: *object*

*Defined in [src/types.ts:61](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L61)*

#### Type declaration:

___

###  Store

Ƭ **Store**: *object*

*Defined in [src/types.ts:3](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L3)*

#### Type declaration:

* **subscribe**: *Function*

___

###  UseActionOptions

Ƭ **UseActionOptions**: *object*

*Defined in [src/types.ts:31](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L31)*

#### Type declaration:

* **onCompleted**? : *undefined | function*

* **onError**? : *undefined | function*

___

###  UseCallActionReturn

Ƭ **UseCallActionReturn**: *[]*

*Defined in [src/types.ts:46](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L46)*

___

###  UseFetchActionReturn

Ƭ **UseFetchActionReturn**: *[]*

*Defined in [src/types.ts:38](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L38)*

___

###  useEventReturn

Ƭ **useEventReturn**: *T extends U ? T : U*

*Defined in [src/types.ts:59](https://github.com/cobuildlab/react-simple-state/blob/7265dd9/src/types.ts#L59)*
