import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMbCardComponent } from './article-mb-card.component';

describe('ArticleCardComponent', () => {
  let component: ArticleMbCardComponent;
  let fixture: ComponentFixture<ArticleMbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
