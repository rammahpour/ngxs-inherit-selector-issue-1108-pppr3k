import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { ChildCountState, CountState } from './app.state';
import { UsersState, ProductsState } from './entities.state';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ChildCountState, UsersState, ProductsState])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
