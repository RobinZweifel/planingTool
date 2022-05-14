import { Injectable } from '@angular/core';
import {Happening} from "../model/happening";
import {WebRequestService} from "./web-request.service";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private webService: WebRequestService) { }

  createEvent(event: Happening){
    window.location.reload();
    return this.webService.post('event', {title: event.title, organizer: event.organizer, date: event.date, info: event.info});
  }

  getEvents(){
    return this.webService.get('events');
  }

  deleteEvent(id: any){
    console.log(id);
    return this.webService.delete('event', id).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }

  editEvent(event: any){
    console.log(event);
    return this.webService.patch('event', event._id, event).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }
}
