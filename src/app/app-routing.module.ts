import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { TodoComponent } from './containers/todo/todo.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: TodoComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
