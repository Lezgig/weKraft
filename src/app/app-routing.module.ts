import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagepolluComponent } from './pagepollu/pagepollu.component';


const routes: Routes = [
  { path: 'polu', component: PagepolluComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
