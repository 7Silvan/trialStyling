import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorNodocComponent } from './investor-nodoc.component';

describe('InvestorNodocComponent', () => {
  let component: InvestorNodocComponent;
  let fixture: ComponentFixture<InvestorNodocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorNodocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorNodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
