import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslatePipe } from '@ngx-translate/core';
import { Benefits } from '../../services/benefits/benefits';

@Component({
  selector: 'app-benefits-table',
  imports: [MatTableModule, MatIconModule, MatButtonModule, TranslatePipe],
  templateUrl: './benefits-table.html',
  styleUrl: './benefits-table.scss',
})
export class BenefitsTable {
  private readonly benefitsSrv = inject(Benefits);

  protected readonly displayedColumns: string[] = ['benefitName', 'noCardLinkingRequired', 'linkYourCardGoGet'];
  protected readonly dataSource = this.benefitsSrv.benefitDataTable;
}
