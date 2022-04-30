import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPersonalDetailsComponent } from './upload-personal-details.component';

describe('UploadPersonalDetailsComponent', () => {
  let component: UploadPersonalDetailsComponent;
  let fixture: ComponentFixture<UploadPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPersonalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
