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
export class PostsService {

  private url = 'http://jsonplaceholder.typicode.com/posts';
  private fakeUrl = 'http://asdasdasdasdadasdasdasd';

  constructor(private http: Http) { }

  getPosts(): Observable<any> {
    return this.http.get(this.url);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError( (error: Response) => {
          if (error.status === 400) {
            return throwError( new BadInputError(error));
          }
          return throwError( new AppError(error));
        })
      );
  }

  setPostRead(post: any): Observable<any> {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify( {
      isRead: true
    }))
      .pipe(
        catchError( (error: Response) => {
          if (error.status === 404) {
            return throwError( new NotFoundError(error));
          }
          return throwError( new AppError(error));
        })
      );
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(this.url + '/' + postId)
      .pipe(
        catchError( (error: Response) => {
          console.log('delete error', error);
          if (error.status === 404) {  // in fact it is equals 0
            return throwError( new NotFoundError(error));
          }
          return throwError( new AppError(error));
        })
      );
  }
}
