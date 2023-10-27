import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenLevelPageComponent } from './oxygen-level-page.component';

describe('OxygenLevelPageComponent', () => {
  let component: OxygenLevelPageComponent;
  let fixture: ComponentFixture<OxygenLevelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygenLevelPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OxygenLevelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
