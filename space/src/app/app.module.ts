import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoverCuriosityComponent } from './rover-curiosity/rover-curiosity.component';
import { RoverOpportunityComponent } from './rover-opportunity/rover-opportunity.component';
import { RoverSpirtComponent } from './rover-spirt/rover-spirt.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { CuriosityComponent } from './landing-page/curiosity/curiosity.component';
import { OpportunityComponent } from './landing-page/opportunity/opportunity.component';
import { SpiritComponent } from './landing-page/spirit/spirit.component';
import { CuriosityInfoComponent } from './landing-page/curiosity-info/curiosity-info.component';
import { OpportunityInfoComponent } from './landing-page/opportunity-info/opportunity-info.component';
import { SpiritInfoComponent } from './landing-page/spirit-info/spirit-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeToMarsComponent } from './welcome-to-mars/welcome-to-mars.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RoverCuriosityComponent,
    RoverOpportunityComponent,
    RoverSpirtComponent,
    HeaderComponent,
    CuriosityComponent,
    OpportunityComponent,
    SpiritComponent,
    CuriosityInfoComponent,
    OpportunityInfoComponent,
    SpiritInfoComponent,
    NavbarComponent,
    WelcomeToMarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
