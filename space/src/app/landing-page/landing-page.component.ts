import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _router: Router) { }

  curiosity = document.getElementById("curiosity-img")
  opportunity = document.getElementById("opportunity-img")
  Spirit = document.getElementById("spirit-img")

  curiosityClickEvent() {
    this._router.navigate(['/Curiosity'])
    console.log('curiosity')
  }
  opportunityClickEvent() {
    this._router.navigate(['/Opportunity'])
    console.log('opportunity')
  }
  spiritClickEvent() {
    this._router.navigate(['/Spirit'])
    console.log('spirit')
  }

  ngOnInit(): void {
  }

}
