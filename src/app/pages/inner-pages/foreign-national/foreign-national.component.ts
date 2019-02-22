import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreign-national',
  templateUrl: './foreign-national.component.html',
  styleUrls: ['./foreign-national.component.scss']
})
export class ForeignNationalComponent implements OnInit {

  articles = [
    {
      header: 'Purchase: $1,300,000',
      body: '90% LTV - Closed in 26 Days!',
      imageUrl: 'https://photos.zillowstatic.com/p_h/ISyfetrdc4zh330000000000.jpg',
      imageAlt: 'roof-financing-image'
    },
    {
      header: 'R/T Refinance: $400,000',
      body: '60% LTV - Client went from a 30 Year to a 15 Year',
      imageUrl: 'https://photos.zillowstatic.com/p_h/ISi75wzilvyey20000000000.jpg',
      imageAlt: 'mobile-home-roof-financing'
    },
    {
      header: 'Purchase: $4,285,000',
      body: '70% LTV - Loan Amount $2,999,500',
      imageUrl: 'https://photos.zillowstatic.com/p_h/ISivblu0fsnkh00000000000.jpg',
      imageAlt: 'roof-bad-credit'
    },
    {
      header: 'Purchase: $560,000',
      body: '55% LTV - $308,000 Loan Amount - Closed in 19 Days! ',
      imageUrl: 'https://photos.zillowstatic.com/p_h/ISalihhhrz9swu0000000000.jpg',
      imageAlt: 'roofing-company'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
