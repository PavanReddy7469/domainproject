import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementanalysisComponent } from './placementanalysis.component';

describe('PlacementanalysisComponent', () => {
  let component: PlacementanalysisComponent;
  let fixture: ComponentFixture<PlacementanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementanalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
