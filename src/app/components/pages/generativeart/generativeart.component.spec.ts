import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeartComponent } from './generativeart.component';

describe('GenerativeartComponent', () => {
  let component: GenerativeartComponent;
  let fixture: ComponentFixture<GenerativeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerativeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerativeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
