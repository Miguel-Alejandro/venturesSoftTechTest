import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Title } from './components/title/title';
import { BenefitsTable } from './components/benefits-table/benefits-table';
import { CategoryChips } from './components/category-chips/category';
import { InstantCouponsCards } from "./components/instant-coupons-cards/instant-coupons-cards";
import { Cashback } from './components/cashback/cashback';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Title, BenefitsTable, CategoryChips, InstantCouponsCards, Cashback, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected homeTitle: string = "Link your business card to unlock cashback offers";
  protected cuponsTitle: string = "Explore Instant Cupons"
  protected idMenu = signal<number>(0);

  public categorySelected($event): void {
    this.idMenu.set($event);
  }
}
