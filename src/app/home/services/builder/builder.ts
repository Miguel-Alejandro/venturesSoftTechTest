import { Injectable } from '@angular/core';
import { Category } from '../../../shared/models/category';
import { Builder } from 'builder-pattern';
import { ApiResponse } from '../../../shared/models/api-response';
import { InstantCoupons } from '../../../shared/models/instant-coupons';

@Injectable({
  providedIn: 'root',
})
export class BuilderPattern {

  public buildCategoryClass(response:any): ApiResponse<Category> {
    const responseCategory = response.menuItems.map((category) =>
      Builder<Category>()
        .idMenu(category.idMenu)
        .description(category["descripción"])
        .build()
    ) ?? null;

    return Builder<ApiResponse<Category>>()
      .error(response.error)
      .codigo(response.codigo)
      .message(response.message)
      .menuItems(responseCategory)
      .build();
  }

  public buildInstantCouponsClass(response:any): ApiResponse<InstantCoupons> {
    const responseInstantCoupons = response.menuItems.map((instantCoupons) =>
      Builder<InstantCoupons>()
        .idItem(instantCoupons.idItem)
        .brandName(instantCoupons.nombreMarca)
        .image(instantCoupons.imagen)
        .description(instantCoupons["descripción"])
        .build()
    ) ?? null;

    return Builder<ApiResponse<InstantCoupons>>()
      .error(response.error)
      .codigo(response.codigo)
      .message(response.message)
      .menuItems(responseInstantCoupons)
      .build();
  }


}
