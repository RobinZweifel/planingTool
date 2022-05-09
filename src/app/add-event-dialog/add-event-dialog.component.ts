import { Component, OnInit } from '@angular/core';
import {Happening} from "../model/happening";
import {EventService} from "../event/event.service";

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
    this.eventService.events.push(this.newHappening);

  }

}
