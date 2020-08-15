import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRenderComponent } from './info-render.component';

describe('InfoRenderComponent', () => {
  let component: InfoRenderComponent;
  let fixture: ComponentFixture<InfoRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
