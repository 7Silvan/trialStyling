import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinComponent } from './itin.component';

describe('ItinComponent', () => {
  let component: ItinComponent;
  let fixture: ComponentFixture<ItinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
