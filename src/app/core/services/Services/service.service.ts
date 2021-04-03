import { Injectable } from '@angular/core';
import {environment} from '@environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';
import { Service } from '@core/models/service.model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllServices(establishment_id: number): any{
    const establishmentId = establishment_id.toString();
    return this.http.get(`${environment.url_api}/services/establishmentServices`,{params: {establishmentId}})
    .pipe(
      map(
        (result: {services: Service[]}) => result.services
      ),
      catchError(this.handleError),
    )
    ;
  }
  getService(id: number): Observable<Service>{
    return this.http.get<Service>(`${environment.url_api}/service/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  createService(product: Service): any{
    return this.http.post(`${environment.url_api}/service`, product)
    .pipe(
      catchError(this.handleError),
    );
  }

  updateService(id: number, changes: Partial<Service> ): any{
    return this.http.put(`${environment.url_api}/service/${id}`, changes)
    .pipe(
      catchError(this.handleError),
    );
  }

  deleteService(id: number): any{
    return this.http.delete(`${environment.url_api}/service/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse ) {
    console.log(error);
    return  throwError('ups algo salió mal');
  }
}
