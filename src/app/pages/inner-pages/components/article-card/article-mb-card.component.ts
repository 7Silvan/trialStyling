import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mb-article-card',
  templateUrl: './article-mb-card.component.html',
  styleUrls: ['./article-mb-card.component.scss']
})
export class ArticleMbCardComponent implements OnInit {
  @Input() header: string;
  @Input() body: string;
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  @Input() url = '#';

  constructor() { }

  ngOnInit() {
  }

}
