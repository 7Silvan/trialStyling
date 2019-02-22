import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mb-heading-section',
  templateUrl: './heading-section.component.html',
  styleUrls: ['./heading-section.component.scss']
})
export class HeadingSectionComponent implements OnInit {
  @Input() header: string;
  @Input() subheader: string;
  @Input() buttonLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
