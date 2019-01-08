import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedesignComponent } from './threedesign.component';

describe('ThreedesignComponent', () => {
  let component: ThreedesignComponent;
  let fixture: ComponentFixture<ThreedesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreedesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});