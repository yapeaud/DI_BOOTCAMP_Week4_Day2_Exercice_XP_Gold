import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoItemDetailComponent } from './component/to-do-item-detail/to-do-item-detail.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', component: ToDoListComponent},
  { path: 'item/:id', component: ToDoItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
