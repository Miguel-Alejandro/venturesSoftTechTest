import { Injectable } from '@angular/core';
import { Category } from '../../classes/Category';
import { Builder } from 'builder-pattern';
import { ResponseObject } from '../../classes/Response';

@Injectable({
  providedIn: 'root',
})
export class BuilderPattern {

  public BuildCategoryClass(response:any): ResponseObject<Category> {
    const responseCategory = response.menuItems.map((category) => 
      Builder<Category>()
        .idMenu(category.idMenu)
        .description(category["descripción"])
        .build()
    ) ?? null;

    return Builder<ResponseObject<Category>>()
      .error(response.error)
      .codigo(response.codigo)
      .message(response.message)
      .menuItems(responseCategory)
      .build();
  }


}
