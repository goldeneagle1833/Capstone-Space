import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToMarsComponent } from './welcome-to-mars.component';

describe('WelcomeToMarsComponent', () => {
  let component: WelcomeToMarsComponent;
  let fixture: ComponentFixture<WelcomeToMarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeToMarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
