import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfComponent } from './my-prof/my-prof.component';

const routes: Routes = [

  { path: 'add/:id', component: MyProfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
