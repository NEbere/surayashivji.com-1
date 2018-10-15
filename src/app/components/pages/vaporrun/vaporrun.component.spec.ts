import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaporrunComponent } from './vaporrun.component';

describe('VaporrunComponent', () => {
  let component: VaporrunComponent;
  let fixture: ComponentFixture<VaporrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaporrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaporrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
