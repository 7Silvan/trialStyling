import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInfoMoreContentComponent } from './section-info.component';

describe('SectionInfoComponent', () => {
  let component: SectionInfoMoreContentComponent;
  let fixture: ComponentFixture<SectionInfoMoreContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionInfoMoreContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInfoMoreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
