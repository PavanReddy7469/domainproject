import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyinformationComponent } from './facultyinformation.component';

describe('FacultyinformationComponent', () => {
  let component: FacultyinformationComponent;
  let fixture: ComponentFixture<FacultyinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyinformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
