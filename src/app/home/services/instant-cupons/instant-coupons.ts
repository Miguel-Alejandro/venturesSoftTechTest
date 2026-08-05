import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../../shared/models/api-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BuilderPattern } from '../builder/builder';
import { environment } from '../../../../environments/environment';
import { InstantCoupons } from '../../../shared/models/instant-coupons';

@Injectable({
  providedIn: 'root',
})
export class InstantCouponsService {
  private readonly builderSrv = inject(BuilderPattern);
  private readonly http = inject(HttpClient);

  public getInstantCoupons(idMenu:number): Observable<ApiResponse<InstantCoupons>>{
    let params = new HttpParams()
     .set('idMenu', idMenu);
    
    return this.http.get(`${environment.apiUrl}/Categorias`, {params}).pipe(
      map((response) => this.builderSrv.buildInstantCouponsClass(response))
    )
  }
}
