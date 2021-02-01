import { State, Action, Selector, createSelector } from '@ngxs/store';

export interface EntitiesStateModel<T> {
  entities: T[]
}

export class EntitiesState {

  static entities<T>() {
    return createSelector([this], (state: { entities: T[] }) => {
      return state.entities;
    });
  }

  static entities2<T>() {
    return createSelector([this], (state: EntitiesStateModel<T>) => {
      return state.entities;
    });
  }

  static get entities3() {
    return createSelector([this], (state: { entities: any[] }) => {
      return state.entities;
    });
  }

}

export interface User {
  name: string
}

export interface UsersStateModel extends EntitiesStateModel<User> {

}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    entities: [{ name: 'joaq' }, { name: 'mark' }]
  }
})
export class UsersState extends EntitiesState {
  //...
}

export interface ProductsStateModel {
  entities: string[]
}

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    entities: ['ngxs', 'ngrx']
  }
})
export class ProductsState extends EntitiesState {
  //...
}