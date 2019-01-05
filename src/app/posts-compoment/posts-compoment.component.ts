import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts-compoment',
  templateUrl: './posts-compoment.component.html',
  styleUrls: ['./posts-compoment.component.css']
})
export class PostsCompomentComponent {

  posts: any[];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe( response => {
        this.posts = response.json();
      });
  }

}
