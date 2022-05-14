import { Injectable } from '@angular/core';
import {Happening} from "../model/happening";
import {WebRequestService} from "./web-request.service";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Happening[] = [
    {_id: 1, title: "Geburi Party von Robin (19.)", organizer: "Robin", date: "", info: "Eine Party mit 10 leuten"},
    {_id: 2, title: "Dinner Pary", organizer: "Joel", date: "", info: "6 Leute, 2 übernachten"},
    {_id: 3, title: "Dart Abend", organizer: "Papa", date: "", info: "Bitte noch Vodka kaufen"}
  ];

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

  /*
  getNewId(){
    return Math.max(...this.events.map(o => o.id))+1;
  }
   */
}
