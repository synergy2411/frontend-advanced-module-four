import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [         // Component, Directive, Pipe
    AppComponent, UsersComponent
  ],
  imports: [
    BrowserModule,         // Module
    FormsModule
  ],
  providers: [],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
