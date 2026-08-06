import { Injectable } from '@angular/core';
import { BenefitsTableData } from '../../../shared/interfaces/benefits-table';

@Injectable({
  providedIn: 'root',
})
export class Benefits {

  public readonly benefitDataTable: Array<BenefitsTableData> = [
    { benefitName: 'Instant coupons', noCardLinkingRequired: true, linkYourCardGoGet: true},
    { benefitName: 'Full access to visa savings edge benefits', noCardLinkingRequired: false, linkYourCardGoGet: true},
    { benefitName: 'Cashback traking', noCardLinkingRequired: false, linkYourCardGoGet: true},
    { benefitName: 'location search', noCardLinkingRequired: false, linkYourCardGoGet: true},
    { benefitName: 'Cashback offers', noCardLinkingRequired: false, linkYourCardGoGet: true},
  ];

}
