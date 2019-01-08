import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {AppError} from '../common/app.error';
import {NotFoundError} from '../common/not-found.error';
import {BadInputError} from '../common/bad-input.error';

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
        }
        // Replaces with global error handler
        /*,
        error => {
          alert('Unhandled error!');
          console.log(error);
        }
        */
      );
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    this.posts.splice(0, 0, post);

    this.postService.createPost(post)
      .subscribe(
        response => {
          post.id = response.json().id;
          input.value = '';
          console.log(response.json());
        },
        (error: AppError) => {
          const newPostIndex = this.posts.indexOf(post);
          this.posts.splice(newPostIndex, 1);

          if (error instanceof BadInputError) {
            // this.form.setErrors(error.json());
          } else {
            // Rethrowing error to process it with global handler
            throw error;
          }
        }
      );
  }

  updatePost(post: any) {
    this.postService.setPostRead(post)
      .subscribe(
        response => {
          console.log(response.json());
        }
      );
  }

  deletePost(post: any) {
    const indexOfDeletedPost = this.posts.indexOf(post);
    this.posts.splice(indexOfDeletedPost, 1);

    this.postService.deletePost(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(indexOfDeletedPost, 0, post);
          console.log('I\'m in custom error handler');

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            throw error;
          }
        }
      );
  }
}
