import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
