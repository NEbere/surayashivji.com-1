import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RizikitotoComponent } from './rizikitoto.component';

describe('RizikitotoComponent', () => {
  let component: RizikitotoComponent;
  let fixture: ComponentFixture<RizikitotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RizikitotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RizikitotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
