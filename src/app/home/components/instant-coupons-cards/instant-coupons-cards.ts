import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InstantCouponsService } from '../../services/instant-cupons/instant-coupons';
import { InstantCoupons } from '../../../shared/models/instant-coupons';
import { firstValueFrom } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { SortCoupons } from '../../../shared/types/sort-coupons';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-instant-coupons-cards',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    CommonModule,
    MatChipsModule
  ],
  templateUrl: './instant-coupons-cards.html',
  styleUrl: './instant-coupons-cards.scss',
})
export class InstantCouponsCards implements OnInit {

  public idMenu = input.required<number>();

  protected readonly sortRule = signal<SortCoupons>(null);
  protected isList = signal<boolean>(false);
  protected instantCouponsData = signal<Array<InstantCoupons>>(null);

  private collator = new Intl.Collator(undefined,{numeric: true, sensitivity: 'base'});
  private readonly instantCouponsSrv = inject(InstantCouponsService);

  protected readonly displayCount = signal<number>(7);
  private readonly pageSize = 7;

  constructor(){
    effect(() => {
      this.idMenu();
      this.sortRule.set(null);
      this.displayCount.set(7);
      this.getInstantCoupons();
    });
  }

  ngOnInit(): void {
    this.getInstantCoupons()
  }

  protected readonly sortedCoupons = computed(() => {
    const data = this.instantCouponsData();
    const rule = this.sortRule();
    
    if (!data) return [];
    if (!rule) return [...data];
    
    return [...data].sort((a, b) => 
      this.collator.compare(a[rule], b[rule])
    );
  });

  protected readonly displayedCoupons = computed(() => {
    return this.sortedCoupons().slice(0, this.displayCount());
  });

   protected showMore(): void {
    const remainingElm = this.sortedCoupons().length - this.pageSize
    this.displayCount.update(count => count + remainingElm);
  }

  protected readonly hasMore = computed(() => 
    this.displayCount() < this.sortedCoupons().length
  );

  protected changeCardsView(showListView:boolean): void {
    showListView ? this.isList.set(showListView) : this.isList.set(showListView); 
  }

  protected sortBy(sortRule: SortCoupons ): void {
    this.sortRule.set(sortRule);
  }

  private async getInstantCoupons(): Promise<void> {
    try {
      const response = await firstValueFrom(this.instantCouponsSrv.getInstantCoupons(this.idMenu()));
      this.instantCouponsData.set(response.menuItems);
    } catch (error) {
      
    }
  }
}
