import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-just-button',
  templateUrl: './just-button.component.html',
  styleUrls: ['./just-button.component.css']
})
export class JustButtonComponent implements OnInit {

  private canSave: boolean;

  constructor() { }

  ngOnInit() {
    this.canSave = false;
  }

}
