import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPlacementDetailsComponent } from './upload-placement-details.component';

describe('UploadPlacementDetailsComponent', () => {
  let component: UploadPlacementDetailsComponent;
  let fixture: ComponentFixture<UploadPlacementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPlacementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPlacementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
