import { Injectable } from '@angular/core';
import { IBenefitsTableData } from '../../interfaces/benefits-table.interface';

@Injectable({
  providedIn: 'root',
})
export class Benefits {

  public readonly benefitDataTable: Array<IBenefitsTableData> = [
    { benefitName: 'Instant cupons', noCardLinkingRequired: true, linkYourCardGoGet: true},
    { benefitName: 'Full access to visa savings edge benefits', noCardLinkingRequired: false, linkYourCardGoGet: true},
    { benefitName: 'Cashback traking', noCardLinkingRequired: false, linkYourCardGoGet: true},
    { benefitName: 'location search', noCardLinkingRequired: false, linkYourCardGoGet: true},
    { benefitName: 'Cashback offers', noCardLinkingRequired: false, linkYourCardGoGet: true},
  ];
  
}
