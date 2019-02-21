import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignNationalComponent } from './foreign-national.component';

describe('ForeignNationalComponent', () => {
  let component: ForeignNationalComponent;
  let fixture: ComponentFixture<ForeignNationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignNationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
