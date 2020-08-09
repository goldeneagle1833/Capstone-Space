import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosityInfoComponent } from './curiosity-info.component';

describe('CuriosityInfoComponent', () => {
  let component: CuriosityInfoComponent;
  let fixture: ComponentFixture<CuriosityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
