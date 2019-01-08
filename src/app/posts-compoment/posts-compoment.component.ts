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
    this.postService.getAll()
      .subscribe(
        posts => this.posts = posts
      );
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    this.posts.splice(0, 0, post);

    this.postService.create(post)
      .subscribe(
        newPost => {
          post.id = newPost.id;
          input.value = '';
          console.log(newPost);
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
    this.postService.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        }
      );
  }

  deletePost(post: any) {
    const indexOfDeletedPost = this.posts.indexOf(post);
    this.posts.splice(indexOfDeletedPost, 1);

    this.postService.delete(post.id)
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
