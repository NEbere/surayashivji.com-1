import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelloComponent } from './mello.component';

describe('MelloComponent', () => {
  let component: MelloComponent;
  let fixture: ComponentFixture<MelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
