import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverSpirtComponent } from './rover-spirt.component';

describe('RoverSpirtComponent', () => {
  let component: RoverSpirtComponent;
  let fixture: ComponentFixture<RoverSpirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverSpirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverSpirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
