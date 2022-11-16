import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule,ReactiveFormsModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, TicketbookingComponent],
  bootstrap: [AppComponent, TicketbookingComponent],
})
export class AppModule {}

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'hello',
//   template: `<h1>Hello {{name}}!</h1>`,
//   styles: [`h1 { font-family: Lato; }`]
// })
// export class HelloComponent  {
//   @Input() name: string;
// }

