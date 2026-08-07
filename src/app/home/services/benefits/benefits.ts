import { Injectable } from '@angular/core';
import { BenefitsTableData } from '../../../shared/interfaces/benefits-table';

@Injectable({
    providedIn: 'root',
})
export class Benefits {

  public readonly benefitDataTable: Array<BenefitsTableData> = [
    { benefitName: 'BENEFITS_TABLE.ROWS.INSTANT_COUPONS', noCardLinkingRequired: true, linkYourCardGoGet: true },
    { benefitName: 'BENEFITS_TABLE.ROWS.VISA_SAVINGS', noCardLinkingRequired: false, linkYourCardGoGet: true },
    { benefitName: 'BENEFITS_TABLE.ROWS.CASHBACK_TRACKING', noCardLinkingRequired: false, linkYourCardGoGet: true },
    { benefitName: 'BENEFITS_TABLE.ROWS.LOCATION_SEARCH', noCardLinkingRequired: false, linkYourCardGoGet: true },
    { benefitName: 'BENEFITS_TABLE.ROWS.CASHBACK_OFFERS', noCardLinkingRequired: false, linkYourCardGoGet: true },
  ];

}
