import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {AppError} from '../common/app.error';
import {NotFoundError} from '../common/not-found.error';

@Component({
  selector: 'app-posts-compoment',
  templateUrl: './posts-compoment.component.html',
  styleUrls: ['./posts-compoment.component.css']
})
export class PostsCompomentComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
          response => {
          this.posts = response.json();
        },
          error => {
          alert('Unhandled error!');
          console.log(error);
        }
      );
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    this.postService.createPost(post)
      .subscribe(
        response => {
          post.id = response.json().id;
          this.posts.splice(0, 0, post);
          input.value = '';
          console.log(response.json());
        },
        error => {
          if (error.status === 400) {
            // this.form.setErrors(error.json());
          } else {
            alert('Unhandled error!');
            console.log(error);
          }
        }
      );
  }

  updatePost(post: any) {
    this.postService.setPostRead(post)
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          alert('Unhandled error!');
          console.log(error);
        }
      );
  }

  deletePost(post: any) {
    this.postService.deletePost(post.id)
      .subscribe(
        response => {
          const indexOfDeletedPost = this.posts.indexOf(post);
          this.posts.splice(indexOfDeletedPost, 1);
        },
        (error: AppError) => {
          console.log('caught delete error', error, error instanceof NotFoundError);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            alert('Unhandled error!');
            console.log(error);
          }
        }
      );
  }
}
