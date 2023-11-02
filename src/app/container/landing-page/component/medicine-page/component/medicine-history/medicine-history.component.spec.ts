import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineHistoryComponent } from './medicine-history.component';

describe('MedicineHistoryComponent', () => {
  let component: MedicineHistoryComponent;
  let fixture: ComponentFixture<MedicineHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
