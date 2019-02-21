import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorBsComponent } from './investor-bs.component';

describe('InvestorBsComponent', () => {
  let component: InvestorBsComponent;
  let fixture: ComponentFixture<InvestorBsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorBsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
