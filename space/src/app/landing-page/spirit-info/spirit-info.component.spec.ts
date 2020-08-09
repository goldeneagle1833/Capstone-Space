import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritInfoComponent } from './spirit-info.component';

describe('SpiritInfoComponent', () => {
  let component: SpiritInfoComponent;
  let fixture: ComponentFixture<SpiritInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
