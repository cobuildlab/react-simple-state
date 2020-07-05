[@cobuildlab/react-simple-state](../README.md) › ["views"](../modules/_views_.md) › [View](_views_.view.md)

# Class: View ‹**T, P, S, SS, P, S**›

## Type parameters

▪ **T**

▪ **P**

▪ **S**

▪ **SS**

▪ **P**

▪ **S**

## Hierarchy

* Component

  ↳ **View**

## Index

### Constructors

* [constructor](_views_.view.md#constructor)

### Properties

* [context](_views_.view.md#context)
* [hasBeenUnmounted](_views_.view.md#private-hasbeenunmounted)
* [props](_views_.view.md#readonly-props)
* [refs](_views_.view.md#refs)
* [state](_views_.view.md#state)
* [subscriptions](_views_.view.md#private-subscriptions)
* [toBeSubscribedIfUnMounted](_views_.view.md#private-tobesubscribedifunmounted)
* [contextType](_views_.view.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](_views_.view.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_views_.view.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_views_.view.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](_views_.view.md#optional-componentdidcatch)
* [componentDidMount](_views_.view.md#componentdidmount)
* [componentDidUpdate](_views_.view.md#optional-componentdidupdate)
* [componentWillMount](_views_.view.md#optional-componentwillmount)
* [componentWillReceiveProps](_views_.view.md#optional-componentwillreceiveprops)
* [componentWillUnmount](_views_.view.md#componentwillunmount)
* [componentWillUpdate](_views_.view.md#optional-componentwillupdate)
* [forceUpdate](_views_.view.md#forceupdate)
* [getSnapshotBeforeUpdate](_views_.view.md#optional-getsnapshotbeforeupdate)
* [render](_views_.view.md#render)
* [setState](_views_.view.md#setstate)
* [shouldComponentUpdate](_views_.view.md#optional-shouldcomponentupdate)
* [subscribe](_views_.view.md#subscribe)

## Constructors

###  constructor

\+ **new View**(`props`: Readonly‹P›): *[View](_views_.view.md)*

*Inherited from [View](_views_.view.md).[constructor](_views_.view.md#constructor)*

Defined in node_modules/@types/react/index.d.ts:486

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

**Parameters:**

Name | Type |
------ | ------ |
`props` | Readonly‹P› |

**Returns:** *[View](_views_.view.md)*

\+ **new View**(`props`: P, `context?`: any): *[View](_views_.view.md)*

*Inherited from [View](_views_.view.md).[constructor](_views_.view.md#constructor)*

Defined in node_modules/@types/react/index.d.ts:488

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |
`context?` | any |

**Returns:** *[View](_views_.view.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [View](_views_.view.md).[context](_views_.view.md#context)*

Defined in node_modules/@types/react/index.d.ts:486

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

___

### `Private` hasBeenUnmounted

• **hasBeenUnmounted**: *boolean* = false

*Defined in [src/views.ts:8](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/views.ts#L8)*

___

### `Readonly` props

• **props**: *Readonly‹P› & Readonly‹object›*

*Inherited from [View](_views_.view.md).[props](_views_.view.md#readonly-props)*

Defined in node_modules/@types/react/index.d.ts:511

___

###  refs

• **refs**: *object*

*Inherited from [View](_views_.view.md).[refs](_views_.view.md#refs)*

Defined in node_modules/@types/react/index.d.ts:517

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹S›*

*Inherited from [View](_views_.view.md).[state](_views_.view.md#state)*

Defined in node_modules/@types/react/index.d.ts:512

___

### `Private` subscriptions

• **subscriptions**: *[Subscription](../modules/_types_.md#subscription)[]* = []

*Defined in [src/views.ts:6](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/views.ts#L6)*

___

### `Private` toBeSubscribedIfUnMounted

• **toBeSubscribedIfUnMounted**: *[LocalObserver](../modules/_types_.md#localobserver)‹T›[]* = []

*Defined in [src/views.ts:7](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/views.ts#L7)*

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [View](_views_.view.md).[contextType](_views_.view.md#static-optional-contexttype)*

Defined in node_modules/@types/react/index.d.ts:468

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [View](_views_.view.md).[UNSAFE_componentWillMount](_views_.view.md#optional-unsafe_componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:712

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹P›, `nextContext`: any): *void*

*Inherited from [View](_views_.view.md).[UNSAFE_componentWillReceiveProps](_views_.view.md#optional-unsafe_componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:744

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹P›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [View](_views_.view.md).[UNSAFE_componentWillUpdate](_views_.view.md#optional-unsafe_componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:772

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from [View](_views_.view.md).[componentDidCatch](_views_.view.md#optional-componentdidcatch)*

Defined in node_modules/@types/react/index.d.ts:641

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

###  componentDidMount

▸ **componentDidMount**(): *void*

*Overrides void*

*Defined in [src/views.ts:26](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/views.ts#L26)*

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹P›, `prevState`: Readonly‹S›, `snapshot?`: SS): *void*

*Inherited from [View](_views_.view.md).[componentDidUpdate](_views_.view.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:683

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹P› |
`prevState` | Readonly‹S› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [View](_views_.view.md).[componentWillMount](_views_.view.md#optional-componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:698

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹P›, `nextContext`: any): *void*

*Inherited from [View](_views_.view.md).[componentWillReceiveProps](_views_.view.md#optional-componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:727

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextContext` | any |

**Returns:** *void*

___

###  componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Overrides void*

*Defined in [src/views.ts:46](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/views.ts#L46)*

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹P›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [View](_views_.view.md).[componentWillUpdate](_views_.view.md#optional-componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:757

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from [View](_views_.view.md).[forceUpdate](_views_.view.md#forceupdate)*

Defined in node_modules/@types/react/index.d.ts:503

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹P›, `prevState`: Readonly‹S›): *SS | null*

*Inherited from [View](_views_.view.md).[getSnapshotBeforeUpdate](_views_.view.md#optional-getsnapshotbeforeupdate)*

Defined in node_modules/@types/react/index.d.ts:677

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹P› |
`prevState` | Readonly‹S› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *ReactNode*

*Inherited from [View](_views_.view.md).[render](_views_.view.md#render)*

Defined in node_modules/@types/react/index.d.ts:504

**Returns:** *ReactNode*

___

###  setState

▸ **setState**‹**K**›(`state`: function | null | S | object, `callback?`: undefined | function): *void*

*Inherited from [View](_views_.view.md).[setState](_views_.view.md#setstate)*

Defined in node_modules/@types/react/index.d.ts:498

**Type parameters:**

▪ **K**: *keyof S*

**Parameters:**

Name | Type |
------ | ------ |
`state` | function &#124; null &#124; S &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹P›, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from [View](_views_.view.md).[shouldComponentUpdate](_views_.view.md#optional-shouldcomponentupdate)*

Defined in node_modules/@types/react/index.d.ts:631

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹P› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*

___

###  subscribe

▸ **subscribe**(`event`: [Event](_event_.event.md)‹T›, `callback`: function, `receiveLastValue`: boolean): *Subscription‹›*

*Defined in [src/views.ts:18](https://github.com/cobuildlab/react-simple-state/blob/87ee77b/src/views.ts#L18)*

Subscribe to an Event
This is a helpful method to keep track of your subscriptions on UnMount and Mount of the Component

**Parameters:**

▪ **event**: *[Event](_event_.event.md)‹T›*

The Event object to which you want to subscribe

▪ **callback**: *function*

The callback function that's gonna be executed when it happens

▸ (`value?`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | T |

▪`Default value`  **receiveLastValue**: *boolean*= false

Whether the callback should receive the last value immediately

**Returns:** *Subscription‹›*

subscription The subscription for this event in the Store
