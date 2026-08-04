import { inject, Injectable } from '@angular/core';
import { BuilderPattern } from '../builder/builder';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { ResponseObject } from '../../classes/Response';
import { Category } from '../../classes/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private readonly builderSrv = inject(BuilderPattern);
  private readonly http = inject(HttpClient);

  public getCategorys(): Observable<ResponseObject<Category>>{
    return this.http.get(`${environment.apiUrl}/Categorias`).pipe(
      map((response) => this.builderSrv.BuildCategoryClass(response))
    )
  }
}
