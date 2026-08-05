import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InstantCouponsService } from '../../services/instant-cupons/instant-coupons';
import { InstantCoupons } from '../../../shared/models/instant-coupons';
import { firstValueFrom } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instant-coupons-cards',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './instant-coupons-cards.html',
  styleUrl: './instant-coupons-cards.scss',
})
export class InstantCouponsCards implements OnInit {
  protected instantCouponsData = signal<Array<InstantCoupons>>(null);
  protected isList = signal<boolean>(false);

  public idMenu = input.required<number>();
  
  private readonly instantCouponsSrv = inject(InstantCouponsService);

  constructor(){
    effect(() => {
      this.idMenu();
      this.getInstantCoupons();
    });
  }

  ngOnInit(): void {
    this.getInstantCoupons()
  }

  protected changeCardsView(showListView:boolean): void {
    showListView ? this.isList.set(showListView) : this.isList.set(showListView); 
  }

  private async getInstantCoupons(): Promise<void> {
    try {
      const response = await firstValueFrom(this.instantCouponsSrv.getInstantCoupons(this.idMenu()));
      this.instantCouponsData.set(response.menuItems);
    } catch (error) {
      
    }
  }
}
