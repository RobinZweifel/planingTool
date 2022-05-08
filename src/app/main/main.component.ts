import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../model/event";
import {EventService} from "../event/event.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  events: Event[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  isExpanded = false;
  showMenu: boolean = false;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  addEvent(){
    this.router.navigate(['add-event'], {relativeTo: this.route}).then(r =>{

    });
   }
}
