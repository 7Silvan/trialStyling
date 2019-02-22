import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureFooterComponent } from './disclosure-footer.component';

describe('DisclosureFooterComponent', () => {
  let component: DisclosureFooterComponent;
  let fixture: ComponentFixture<DisclosureFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclosureFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclosureFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
