import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoniteComponent } from './cryptonite.component';

describe('CryptoniteComponent', () => {
  let component: CryptoniteComponent;
  let fixture: ComponentFixture<CryptoniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
