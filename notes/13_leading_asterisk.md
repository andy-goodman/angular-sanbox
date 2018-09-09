#Leading asterisk
If we use leading asterisk, with structural directives, like ngFor, ngIf, ngSwitchCase, angular is going to rewrite code, using ng-template

```html
<div *ngIf="courses.length > 0; else noCourses">
  List of courses
</div>
<ng-template #noCourses>
  No courses yet
</ng-template>
```

is equals to

```html
<ng-template [ngIf]="courses.length > 0">
  <div>
    List of courses
  </div>
</ng-template>
<ng-template [ngIf]="!(courses.length > 0)">
  No courses
</ng-template>
```
