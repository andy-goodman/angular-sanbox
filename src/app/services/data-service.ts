import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AppError} from '../common/app.error';
import {NotFoundError} from '../common/not-found.error';
import {BadInputError} from '../common/bad-input.error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  create(resource: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        // was: catch(this.handleError)
        catchError( this.handleError)
      );
  }

  update(resource: any): Observable<any> {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify( {
      isRead: true
    }))
      .pipe(
        catchError( this.handleError)
      );
  }

  delete(resourceId: number): Observable<any> {
    return this.http.delete(this.url + '/' + resourceId)
      .pipe(
        catchError( this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError( new BadInputError(error));
    }
    if (error.status === 404) {
      return throwError( new NotFoundError(error));
    }
    return throwError( new AppError(error));
  }
}
