import { Component, inject, signal, computed } from '@angular/core';
import { Header } from './components/header/header';
import { Title } from './components/title/title';
import { BenefitsTable } from './components/benefits-table/benefits-table';
import { CategoryChips } from './components/category-chips/category';
import { InstantCouponsCards } from "./components/instant-coupons-cards/instant-coupons-cards";
import { Cashback } from './components/cashback/cashback';
import { Footer } from "./components/footer/footer";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [Header, Title, BenefitsTable, CategoryChips, InstantCouponsCards, Cashback, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly translate = inject(TranslateService);

  protected readonly homeTitle = computed(() => this.translate.instant('HOME.TITLE'));
  protected readonly cuponsTitle = computed(() => this.translate.instant('HOME.COUPONS_TITLE'));
  protected readonly idMenu = signal<number>(0);

  public categorySelected($event): void {
    this.idMenu.set($event);
  }
}
