import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarLevelPageComponent } from './sugar-level-page.component';

describe('SugarLevelPageComponent', () => {
  let component: SugarLevelPageComponent;
  let fixture: ComponentFixture<SugarLevelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarLevelPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarLevelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
