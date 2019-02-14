import { Component, OnInit } from '@angular/core';
import {GithubFollowersService} from '../services/github-followers.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
