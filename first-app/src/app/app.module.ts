import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';

@NgModule({
  declarations: [         // Component, Directive, Pipe
    AppComponent, UsersComponent, UserDetailComponent
  ],
  imports: [
    BrowserModule,         // Module
    FormsModule
  ],
  providers: [],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
