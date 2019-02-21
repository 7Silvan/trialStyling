import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInnerPageComponent } from './index-inner-page.component';

describe('MainComponent', () => {
  let component: IndexInnerPageComponent;
  let fixture: ComponentFixture<IndexInnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexInnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexInnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
