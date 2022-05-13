import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {ActivatedRoute, Router} from "@angular/router";
import {Happening} from "../model/happening";
import {EventService} from "../services/event.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEventDialogComponent} from "../add-event-dialog/add-event-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  happenings: Happening[] = [];
  isExpanded = false;
  showMenu: boolean = false;
  isShowing = false;

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.happenings = this.eventService.getEvents();
  }

  openDialog() {
    this.dialog.open(AddEventDialogComponent);
  }

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
}
