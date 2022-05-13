import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDetailsComponent } from './academic-details.component';

describe('AcademicDetailsComponent', () => {
  let component: AcademicDetailsComponent;
  let fixture: ComponentFixture<AcademicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
