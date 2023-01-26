import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { ToDoItemDetailComponent } from './component/to-do-item-detail/to-do-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
