import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicperformanceComponent } from './acadamicperformance.component';

describe('AcadamicperformanceComponent', () => {
  let component: AcadamicperformanceComponent;
  let fixture: ComponentFixture<AcadamicperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcadamicperformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadamicperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
