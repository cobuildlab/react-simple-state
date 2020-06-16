export interface IObserberReducer<State, Parent = any> {
  (rawState: Parent): State;
}
export class Observer<State, Parent = any> {
  private state: State;
  private initialState: State;
  private subcriptions: Set<Function> = new Set();
  private readonly reducer: IObserberReducer<State, Parent> | undefined;
  private readonly parent: Observer<Parent> | undefined;
  private readonly subscription: (state: Parent) => void;

  constructor(
    initialState: State,
    reducer?: IObserberReducer<State, Parent>,
    parent?: Observer<Parent>,
  ) {
    this.reducer = reducer;
    this.parent = parent;

    const state =
      parent && this.reducer ? this.reducer(parent.getState()) : initialState;

    this.initialState = state;
    this.state = state;

    this.subscription = (parentState: Parent) => {
      this.notify(parentState);
    };
  }
  getState(): State {
    return this.state;
  }
  subscribe<F extends Function>(callback: F) {
    if (this.subcriptions.size === 0) {
      this.parent?.subscribe(this.subscription);
    }
    this.subcriptions.add(callback);
  }

  unSubscribe<F extends Function>(callback: F) {
    if (this.subcriptions.size === 1) {
      this.state = this.initialState;
      this.parent?.unSubscribe(this.subscription);
    }
    this.subcriptions.delete(callback);
  }

  notify(state: Parent) {
    const newState = this.reducer ? this.reducer(state) : state;

    this.state = newState as State;

    const { subcriptions } = this;

    for (const callback of subcriptions) {
      callback(newState);
    }
  }
}
