import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGradesComponent } from './upload-grades.component';

describe('UploadGradesComponent', () => {
  let component: UploadGradesComponent;
  let fixture: ComponentFixture<UploadGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
