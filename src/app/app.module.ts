import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddHabitComponent } from './add-habit/add-habit.component';
import { MonthSelectComponent } from './month-select/month-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddHabitComponent,
    MonthSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
