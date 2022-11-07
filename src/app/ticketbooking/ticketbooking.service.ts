import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticketbooking } from './ticketbooking';

@Injectable({
  providedIn: 'root',
})
export class TicketbookingService {
  constructor(private httpClient: HttpClient) {}
  public getAllTicketbookingService() {
    return this.httpClient.get('http://localhost:8080/ticketbooking/');
  }
  public getTicketbookingService(id) {
    return this.httpClient.get('http://localhost:8080/ticketbooking/' + id);
  }
  public deleteTicketbookingService(id) {
    return this.httpClient.delete('http://localhost:8080/ticketbooking/' + id);
  }
  // public deleteTicketbookingService(id: string) {
  //   return this.httpClient.delete('http://localhost:8080/ticketbooking/' + id);
  // }
  public createTicketbookingService(ticketbooking: Ticketbooking) {
    alert(JSON.stringify(ticketbooking));
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/ticketbooking/',
      JSON.stringify(ticketbooking),
      {
        headers: headers,
      }
    );
  }
  public updateTicketbookingService(id, ticketbooking: Ticketbooking) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/ticketbooking/' + id,
      JSON.stringify(ticketbooking),
      {
        headers: headers,
      }
    );
  }
}
