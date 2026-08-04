import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Benefits } from '../../services/benefits/benefits';

@Component({
  selector: 'app-benefits-table',
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './benefits-table.html',
  styleUrl: './benefits-table.scss',
})
export class BenefitsTable {
  private readonly benefitsSrv = inject(Benefits);

  displayedColumns: string[] = ['benefitName', 'noCardLinkingRequired', 'linkYourCardGoGet'];
  dataSource = this.benefitsSrv.benefitDataTable;
}
