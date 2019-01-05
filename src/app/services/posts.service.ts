import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'http://ajsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<any> {
    return this.http.get(this.url);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(post));
  }

  setPostRead(post: any): Observable<any> {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify( {
      isRead: true
    }));
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(this.url + '/' + postId);
  }
}
