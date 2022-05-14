import {Component, Input, OnInit} from '@angular/core';
import {Happening} from "../model/happening";
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  //happenings: Happening[] = [];

  constructor(
    public eventService: EventService
  ) { }

  @Input() happening: Happening = {_id: 0, title: "", date: "", organizer: "", info: ""};

  ngOnInit(): void {
    console.log("on init ");
    this.eventService.getEvents().subscribe((event) => {
      console.log(event);
    });
  }
}
