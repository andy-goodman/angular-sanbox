import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor(private router: Router) { }

  submitUser() {
    console.log('Submitting user');
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }
}
