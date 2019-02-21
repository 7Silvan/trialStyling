import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedIncomeComponent } from './stated-income.component';

describe('StatedIncomeComponent', () => {
  let component: StatedIncomeComponent;
  let fixture: ComponentFixture<StatedIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatedIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatedIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
