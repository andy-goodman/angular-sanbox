import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts-compoment',
  templateUrl: './posts-compoment.component.html',
  styleUrls: ['./posts-compoment.component.css']
})
export class PostsCompomentComponent {

  posts: any[];
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe( response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(
        response => {
          post.id = response.json().id;
          this.posts.splice(0, 0, post);
          input.value = '';
          console.log(response.json());
        }
      );
  }
}
