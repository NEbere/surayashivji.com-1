import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlasterComponent } from './blaster.component';

describe('BlasterComponent', () => {
  let component: BlasterComponent;
  let fixture: ComponentFixture<BlasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
