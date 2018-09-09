#Directives

We use directives to modify the structure of the DOM
 
There are two types of directives
- Structural, modifies the structure of the DOM
Use prefix * (asterix).
@ngIf - if expression is true, than this element will be rendered in the DOM

```html
<div *ngIf="courses.length > 0; else noCourses">
  List of courses
</div>
<ng-template #noCourses>
  No courses yet
</ng-template>
```

- Attribute, modify the attributes of DOM elements

