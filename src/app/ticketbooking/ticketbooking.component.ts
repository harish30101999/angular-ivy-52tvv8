import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Ticketbooking } from './ticketbooking';

import { TicketbookingService } from './ticketbooking.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css'],
})
export class TicketbookingComponent implements OnInit {
  myImage:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtDW6C65Xb6_W-ot54cP-h1bz8vh3K7QuzQ&usqp=CAU"
  ticketbooking = [];
  model = new Ticketbooking();
  form: FormGroup;
  submitted = false;

  constructor(private ticketbookingService: TicketbookingService) {}

  ngOnInit() {
    this.getAllTicketbooking();
  }
  public getAllTicketbooking() {
    this.ticketbookingService
      .getAllTicketbookingService()
      .subscribe((x: any[]) => {
        this.ticketbooking = x;
      });
  }
  editTicketbooking(id) {
    alert(JSON.stringify(this.model));

    this.ticketbookingService
    .getTicketbookingService(id)
    .subscribe((Data: any[])=>{this.ticketbooking=Data;});
    // .updateTicketbookingService(this.model.id, this.model)
    //     .subscribe((data) => {
    //       // this.getAllTicketbooking();
    //       // this.model = new Ticketbooking()});
    //     this.getAllTicketbooking();
    //     })
  }
    // .updateTicketbookingService(this.model.id, this.model)
    //     .subscribe((data) => {
    //       this.getAllTicketbooking();
    //       this.model = new Ticketbooking()});
    //     }
      // .updateTicketbookingService(this.model.id,this.model)
      // .subscribe((data: any) => {
      //   this.getAllTicketbooking()});
      // .subscribe((data: any) => (this.model = data));
    // alert(JSON.stringify(this.model));
  

  // deleteTicketbooking(id: any) {
  //   alert(JSON.stringify(this.model));
  //   this.ticketbookingService
  //     .deleteTicketbookingService(id)
  //     .subscribe((data) => {
  //       this.getAllTicketbooking();
  //     });
  //   alert(JSON.stringify(this.model));
  // }
  deleteTicketbooking(id) {
    alert(this.model.id);
    this.ticketbookingService
      .deleteTicketbookingService(id)
      .subscribe((data) => {
        this.getAllTicketbooking();
      });
  }

  addTicketbooking() {
    // alert(JSON.stringify(this.model));
    if (!this.model.id) {
      // alert(JSON.stringify(this.model));
      this.ticketbookingService
        .createTicketbookingService(this.model)
        .subscribe((data) => {
          this.getAllTicketbooking();
          this.model = new Ticketbooking();
        });
    } else {
      alert(JSON.stringify(this.model));
      this.ticketbookingService
        .updateTicketbookingService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllTicketbooking();
          this.model = new Ticketbooking();
        });
    }
  }
}
