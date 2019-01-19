import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionmappingComponent } from './projectionmapping.component';

describe('ProjectionmappingComponent', () => {
  let component: ProjectionmappingComponent;
  let fixture: ComponentFixture<ProjectionmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
