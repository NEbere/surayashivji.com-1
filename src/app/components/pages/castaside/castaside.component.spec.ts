import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastasideComponent } from './castaside.component';

describe('CastasideComponent', () => {
  let component: CastasideComponent;
  let fixture: ComponentFixture<CastasideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastasideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
