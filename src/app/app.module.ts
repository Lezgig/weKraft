import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarCommonModule, CalendarModule, CalendarMonthModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AgendaComponent } from './agenda/agenda.component';
import { DemoUtilsModule } from './demo-utils/module';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    DemoUtilsModule,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CalendarCommonModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CalendarMonthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
