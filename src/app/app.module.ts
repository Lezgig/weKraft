import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagepolluComponent } from './pagepollu/pagepollu.component';
import { HeaderweComponent } from './headerwe/headerwe.component';

@NgModule({
  declarations: [
    AppComponent,
    PagepolluComponent,
    HeaderweComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
