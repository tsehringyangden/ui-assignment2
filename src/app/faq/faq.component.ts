import {Component} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  items = ['Can anybody without subscription plans list the property for rent?',
    'How will the rental management benefit the landlords?',
    'How can you screen your tenants?',
    'How do I avoid scam or wrong listing?',
    'How do I report the wrong location listing?',
    'What are the main benefit of having subscription plants for rental management?',
    'How do I purchase the rental management software plan?'
  ];
  expandedIndex = 0;
}
