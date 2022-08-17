import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { ParentComponent } from './components/playground/parent/parent.component';
import { ChildComponent } from './components/playground/parent/child/child.component';

@NgModule({
  declarations: [         // Component, Directive, Pipe
    AppComponent, UsersComponent, UserDetailComponent, ParentComponent, ChildComponent
  ],
  imports: [
    BrowserModule,         // Module
    FormsModule
  ],
  providers: [],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
