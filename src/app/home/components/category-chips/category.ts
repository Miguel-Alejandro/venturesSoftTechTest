import { Component, inject, OnInit, output, signal } from '@angular/core';
import { CategoryService } from '../../services/category/category';
import { MatChipsModule } from '@angular/material/chips';
import { firstValueFrom } from 'rxjs';
import { Category } from '../../../shared/models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [MatChipsModule, CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class CategoryChips implements OnInit {
  public categorySelected = output<number>();
  protected categoryData:Array<Category>;
  protected categoryId = signal<number>(0);

  private readonly categorySrv = inject(CategoryService);

  ngOnInit(): void {
    this.getCategories();
  }

  protected selectCategory(idMenu:number): void {
    this.categoryId.set(idMenu);
    this.categorySelected.emit(idMenu);
  }

  private async getCategories(): Promise<void> {
    try {
      const response = await firstValueFrom(this.categorySrv.getCategories());
      this.categoryData = response.menuItems;
    } catch (error) {
      console.error("Ocurrio un error al cargar las categorias", error);
    }
  }
}
