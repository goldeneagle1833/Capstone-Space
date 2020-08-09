import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverOpportunityComponent } from './rover-opportunity.component';

describe('RoverOpportunityComponent', () => {
  let component: RoverOpportunityComponent;
  let fixture: ComponentFixture<RoverOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
