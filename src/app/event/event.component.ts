import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../model/event";
import {EventService} from "./event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: Event[] = [];

  constructor(
    private eventService: EventService
  ) { }

  @Input() event: Event = {id: 0, title: "", date: "", organizer: "", extra: ""};

  ngOnInit(): void {
    console.log("on init ");
    this.events = this.eventService.getEvents();
  }

  deleteEvent(event: Event){
    console.log(this.events);
    this.events = this.events.filter(e => { return e.id != event.id });
    this.eventService.events = this.eventService.getEvents().filter(e => { return e.id != event.id });
    console.log(this.events);
  }

}
