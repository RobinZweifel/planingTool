import { Component, OnInit } from '@angular/core';
import {Happening} from "../model/happening";
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent implements OnInit {

  constructor(private eventService: EventService) {
  }

  newHappening: Happening = {} as Happening;

  ngOnInit(): void {
  }

  addEvent(){
    this.eventService.createEvent(this.newHappening);
    console.log(this.eventService.events);
  }

}
