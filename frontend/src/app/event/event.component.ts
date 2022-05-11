import {Component, Input, OnInit} from '@angular/core';
import {Happening} from "../model/happening";
import {EventService} from "./event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  happenings: Happening[] = [];

  constructor(
    private eventService: EventService
  ) { }

  @Input() happening: Happening = {id: 0, title: "", date: "", organizer: "", extra: ""};

  ngOnInit(): void {
    console.log("on init ");
    this.happenings = this.eventService.getEvents();
  }

  deleteEvent(happening: Happening){
    console.log(this.happenings);
    this.happenings = this.happenings.filter(e => { return e.id != happening.id });
    this.eventService.events = this.eventService.getEvents().filter(e => { return e.id != happening.id });
    console.log(this.happenings);
  }

}
