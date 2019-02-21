import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueStatedIncomeComponent } from './true-stated-income.component';

describe('TrueStatedIncomeComponent', () => {
  let component: TrueStatedIncomeComponent;
  let fixture: ComponentFixture<TrueStatedIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueStatedIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueStatedIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
