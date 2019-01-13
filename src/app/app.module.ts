import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './containers/todo/todo.component';
import { ItemComponent } from './components/item/item.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { HomeComponent } from './containers/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './containers/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ItemComponent,
    AddCarComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
