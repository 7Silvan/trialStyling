import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGetAdviceComponent } from './section-get-advice.component';

describe('SectionGetAdviceComponent', () => {
  let component: SectionGetAdviceComponent;
  let fixture: ComponentFixture<SectionGetAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGetAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGetAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
