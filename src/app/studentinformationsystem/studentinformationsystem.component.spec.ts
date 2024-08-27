import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentinformationsystemComponent } from './studentinformationsystem.component';

describe('StudentinformationsystemComponent', () => {
  let component: StudentinformationsystemComponent;
  let fixture: ComponentFixture<StudentinformationsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentinformationsystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentinformationsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
