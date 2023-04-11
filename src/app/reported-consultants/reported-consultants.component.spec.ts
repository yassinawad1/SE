import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedConsultantsComponent } from './reported-consultants.component';

describe('ReportedConsultantsComponent', () => {
  let component: ReportedConsultantsComponent;
  let fixture: ComponentFixture<ReportedConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedConsultantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
