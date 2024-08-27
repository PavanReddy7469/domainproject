import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamiccalenderComponent } from './acadamiccalender.component';

describe('AcadamiccalenderComponent', () => {
  let component: AcadamiccalenderComponent;
  let fixture: ComponentFixture<AcadamiccalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcadamiccalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadamiccalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
