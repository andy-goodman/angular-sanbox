import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AppError} from '../common/app.error';
import {NotFoundError} from '../common/not-found.error';
import {DataService} from './data-service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
