import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverCuriosityComponent } from "../app/rover-curiosity/rover-curiosity.component";
import { RoverOpportunityComponent } from "../app/rover-opportunity/rover-opportunity.component";
import { RoverSpirtComponent } from "../app/rover-spirt/rover-spirt.component";
import { LandingPageComponent } from "../app/landing-page/landing-page.component";
import { WelcomeToMarsComponent } from "../app/welcome-to-mars/welcome-to-mars.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeToMarsComponent
  },
  {
    path: "Curiosity",
    component: RoverCuriosityComponent
  },
  {
    path: "Opportunity",
    component: RoverOpportunityComponent
  },
  {
    path: "Spirit",
    component: RoverSpirtComponent
  },
  {
    path: "landing",
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
