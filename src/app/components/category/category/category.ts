import { Component, inject, input, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service/category-service';
import { MatChipsModule } from '@angular/material/chips';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-category',
  imports: [MatChipsModule],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category implements OnInit {
  public categoryData = Array();
  private readonly categorySrv = inject(CategoryService);

  ngOnInit(): void {
    this.getCategories();
  }

  private async getCategories(): Promise<void> {
    try {
      const response = await firstValueFrom(this.categorySrv.getCategorys());
      this.categoryData = response.menuItems;
    } catch (error) {
      console.error("Ocurrio un error al cargar las categorias", error);
    }
  }
}
