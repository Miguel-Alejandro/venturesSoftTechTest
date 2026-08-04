import { Injectable } from '@angular/core';
import { Category } from '../../../shared/models/category';
import { Builder } from 'builder-pattern';
import { ApiResponse } from '../../../shared/models/api-response';

@Injectable({
  providedIn: 'root',
})
export class BuilderPattern {

  public BuildCategoryClass(response:any): ApiResponse<Category> {
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


}
