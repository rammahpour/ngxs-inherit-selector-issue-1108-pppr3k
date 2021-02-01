import { Store, Select, Selector } from '@ngxs/store';
import { Add, CountState, ChildCountState } from './app.state';

export class MetaSelector {

  @Selector([ChildCountState.count]) static count(count: number) {
    console.log("Selector", count)
    return count
  }

//  static get count() {
//    return createSelector([this], (state: CountStateModel) => {
//      return state.count
//    })
//  }

}