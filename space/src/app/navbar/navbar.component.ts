import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
const newLocal = false;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(location: Location, router: Router) {}
  // main = false;
  // rovers = false;
  // curiosity = false;
  // opportunity = false;
  // spirit = false;
  // location = window.location.href;
  // locationTrueCheck(location) {
  //   let main = false;
  //   let rovers = false;
  //   let curiosity = false;
  //   let opportunity = false;
  //   let spirit = false;
  //   if (location.includes('4200')) {
  //     main = true;
  //     return main;
  //   }
  //   if (location.includes('landing')) {
  //     rovers = true;
  //     return rovers;
  //   }
  // }
  //trying to get angular to check the url and display a differnt h1 based on the url

  ngOnInit(): void {
    //console.log(this.locationTrueCheck(this.location));
  }
}
