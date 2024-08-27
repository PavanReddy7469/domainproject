import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceanalysisComponent } from './attendenceanalysis.component';

describe('AttendenceanalysisComponent', () => {
  let component: AttendenceanalysisComponent;
  let fixture: ComponentFixture<AttendenceanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendenceanalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
