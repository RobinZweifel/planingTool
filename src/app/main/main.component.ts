import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../model/event";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  events: Event[] = [
    {id: 1, title: "Geburi Party", organizer: "Robin", date: "", extra: "Eine Party mit 10 leuten"},
    {id: 2, title: "Dinner Pary", organizer: "Joel", date: "", extra: "6 Leute, 2 übernachten"},
    {id: 3, title: "Dart Abend", organizer: "Papa", date: "", extra: "Bitte noch Vodka kaufen"}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  isExpanded = true;
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
