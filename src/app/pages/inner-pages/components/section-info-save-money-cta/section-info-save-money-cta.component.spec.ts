import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInfoSaveMoneyCtaComponent } from './section-info-save-money-cta.component';

describe('SectionInfoSaveMoneyCtaComponent', () => {
  let component: SectionInfoSaveMoneyCtaComponent;
  let fixture: ComponentFixture<SectionInfoSaveMoneyCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionInfoSaveMoneyCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInfoSaveMoneyCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
