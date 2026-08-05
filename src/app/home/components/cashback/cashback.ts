import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InstantCouponsService } from '../../services/instant-cupons/instant-coupons';
import { firstValueFrom } from 'rxjs';
import { InstantCoupons } from '../../../shared/models/instant-coupons';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cashback',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './cashback.html',
  styleUrl: './cashback.scss',
})
export class Cashback implements OnInit {
  public selectedCoupons = signal<Array<InstantCoupons>>([]);
  private allInstantCoupons = signal<Array<InstantCoupons>>(null);
  
  private readonly instantCouponsSrv = inject(InstantCouponsService);

  ngOnInit(): void {
    this.getInstantCoupons();

  }

  private async getInstantCoupons():Promise<void>{
    try {
      const response = await firstValueFrom(this.instantCouponsSrv.getInstantCoupons(1001));
      this.allInstantCoupons.set(response.menuItems);
      this.selectCouponsByCategory();
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  }

  private selectCouponsByCategory(): void{
    const newSelectedCouponsArr: Array<InstantCoupons> = [];
    newSelectedCouponsArr.push(this.allInstantCoupons().find((coupon) => coupon.brandName.includes("Restaurant")));
    newSelectedCouponsArr.push(this.allInstantCoupons().find((coupon) => coupon.brandName.includes("Software")));
    newSelectedCouponsArr.push(this.allInstantCoupons().find((coupon) => coupon.brandName.includes("Gas Station")));
    newSelectedCouponsArr.push(this.allInstantCoupons().find((coupon) => coupon.brandName.includes("Airline")));

    this.selectedCoupons.set(newSelectedCouponsArr);
  }
}
