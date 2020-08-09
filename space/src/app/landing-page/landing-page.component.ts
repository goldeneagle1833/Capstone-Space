import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  curiosity = document.getElementById("curiosity-img")
  opportunity = document.getElementById("opportunity-img")
  Spirit = document.getElementById("spirit-img")


  ngOnInit(): void {
  }

}
