import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WklymotionComponent } from './wklymotion.component';

describe('WklymotionComponent', () => {
  let component: WklymotionComponent;
  let fixture: ComponentFixture<WklymotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WklymotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WklymotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
