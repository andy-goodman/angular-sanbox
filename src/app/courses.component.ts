import {Component} from '@angular/core';
@Component({
  selector: 'app-courses',
  template: `
    <h2 [style.color]="!isActive ? 'blue' : 'white'">Are you sure?</h2>
    <button class="btn" [class]="isActive ? 'btn-primary' : ''">OK</button>
    <button class="btn">Cancel</button>
  `
})
export class CoursesComponent {
  isActive = true;

  private invertActiveFlag() {
    this.isActive = !this.isActive;
    console.log('Active flag is inverted, and now it is ' + this.isActive);
    setTimeout(() => {this.invertActiveFlag();}, 1000);
  }

  constructor() {
    this.invertActiveFlag();
  }
}
