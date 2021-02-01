import { State, Action, Selector, createSelector } from '@ngxs/store';
import {Injectable } from '@angular/core'

export class Add {
  static readonly type = 'Add';
}

export class CountStateModel {
  count: number
}

export class CountState {

  @Selector([CountState]) static __count(state: CountStateModel) {
    console.log("Selector", state)
    return state.count
  }

  @Action(Add)
  add({ getState, setState }) {

    const { count } = getState();

    console.log("Action", "Add", count)

    setState({ count: count + 1 });

  }

  static get count() {
    return createSelector([this], (state: CountStateModel) => {
      debugger
      return state.count
    })
  }

}

@State<CountStateModel>({
  name: 'childCount',
  defaults: {
    count: 0
  }
})
export class ChildCountState extends CountState {



}
