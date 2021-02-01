import { Component } from "@angular/core";
import { Store, Select, Selector } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Add, CountState, ChildCountState } from "./app.state";
import { UsersState, ProductsState } from "./entities.state";
import { User } from "./entities.state";

@Component({
  selector: "my-app",
  template: `
    <h1>Count is {{ count$ | async }}</h1>
    <p *ngFor="let user of (users$ | async)">{{ user.name }}</p>
    <p *ngFor="let product of (products$ | async)">{{ product }}</p>

    <button (click)="onClick()">Click Me</button>
  `
})
export class AppComponent {
  @Select(ChildCountState.count) count$: Observable<number>;
  //@Select(CountState.count) count$: Observable<number>;
  //@Select(MetaState.count) count$: Observable<number>;

  @Select(UsersState.entities())
  users$: Observable<string[]>;

  @Select(ProductsState.entities())
  products$: Observable<string[]>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());
    this.store.select(UsersState.entities<User>());
  }
}
