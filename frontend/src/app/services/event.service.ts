import { Injectable } from '@angular/core';
import {Happening} from "../model/happening";
import {WebRequestService} from "./web-request.service";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Happening[] = [
    {id: 1, title: "Geburi Party von Robin (19.)", organizer: "Robin", date: "", extra: "Eine Party mit 10 leuten"},
    {id: 2, title: "Dinner Pary", organizer: "Joel", date: "", extra: "6 Leute, 2 übernachten"},
    {id: 3, title: "Dart Abend", organizer: "Papa", date: "", extra: "Bitte noch Vodka kaufen"}
  ];

  constructor(private webService: WebRequestService) { }

  createEvent(event: Happening){
    this.webService.post('/event', {title: event.title, organizer: event.organizer, date: event.date, info: event.extra});
  }

  getEvents(){
    return this.events;
  }

  getNewId(){
    return Math.max(...this.events.map(o => o.id))+1;
  }
}
