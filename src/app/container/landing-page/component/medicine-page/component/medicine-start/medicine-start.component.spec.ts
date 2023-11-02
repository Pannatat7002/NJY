import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStartComponent } from './medicine-start.component';

describe('MedicineStartComponent', () => {
  let component: MedicineStartComponent;
  let fixture: ComponentFixture<MedicineStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
