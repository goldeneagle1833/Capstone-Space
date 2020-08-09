import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverCuriosityComponent } from './rover-curiosity.component';

describe('RoverCuriosityComponent', () => {
  let component: RoverCuriosityComponent;
  let fixture: ComponentFixture<RoverCuriosityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverCuriosityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverCuriosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
