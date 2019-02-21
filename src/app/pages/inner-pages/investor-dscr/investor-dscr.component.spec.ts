import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorDscrComponent } from './investor-dscr.component';

describe('InvestorDscrComponent', () => {
  let component: InvestorDscrComponent;
  let fixture: ComponentFixture<InvestorDscrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorDscrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorDscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
