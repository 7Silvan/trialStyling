import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mb-section-info-save-money-cta',
  templateUrl: './section-info-save-money-cta.component.html',
  styleUrls: ['./section-info-save-money-cta.component.scss']
})
export class SectionInfoSaveMoneyCtaComponent implements OnInit {
  @Input() header: string;
  @Input() content: string;
  @Input() buttonOneText: string;
  @Input() buttonTwoText: string;
  @Input() urlOne = '#';
  @Input() urlTwo = '#';
  @Input() showPhoneNumber = false;

  constructor() { }

  ngOnInit() {
  }

}
