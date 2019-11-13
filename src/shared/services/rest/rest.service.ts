import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OptApiResponse } from '@shared/models';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export abstract class RestService<T, U, S> {
  protected baseUrl: string;

  constructor(protected http: HttpClient) {}

  public list<L = null>(opts?: L): Observable<OptApiResponse<S>> {
    return this.http
      .get<OptApiResponse<S>>(`${this.baseUrl}`, {
        params: this.getHttpParams<L>(opts),
      })
      .pipe(catchError(this.handleError));
  }

  public create(entity: U): Observable<OptApiResponse<T>> {
    return this.http
      .post<OptApiResponse<T>>(`${this.baseUrl}`, entity)
      .pipe(catchError(this.handleError));
  }

  public detail(id: number | string): Observable<OptApiResponse<T>> {
    return this.http
      .get<OptApiResponse<T>>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  public update(id: number, entity: U): Observable<OptApiResponse<T>> {
    return this.http
      .put<OptApiResponse<T>>(`${this.baseUrl}/${id}`, entity)
      .pipe(catchError(this.handleError));
  }

  public updatePositions<L>(body: L): Observable<OptApiResponse<L>> {
    return this.http
      .post<OptApiResponse<T>>(`${this.baseUrl}/positions`, body)
      .pipe(catchError(this.handleError));
  }

  public delete(id: number): Observable<OptApiResponse<T>> {
    return this.http
      .delete<OptApiResponse<T>>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = `Error ${error.status}: "${error.message}"`;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `Error:' ${error.error.message}`;
    }
    return throwError(errorMessage);
  }

  private getHttpParams<L>(params: L): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        httpParams = httpParams.set(key, `${value}`);
      });
    }
    return httpParams;
  }
}
