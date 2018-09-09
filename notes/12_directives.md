#Directives

We use directives to modify the structure of the DOM
 
There are two types of directives
- Structural, modifies the structure of the DOM
- Attribute, modify the attributes of DOM elements

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
Element exists in DOM only if condition is true

##Hidden property
```html
<div [hidden]="courses.length == 0">
  List of courses
</div>
<div [hidden]="courses.length > 0">
  No courses yet
</div>
```
Here all two divs exists in DOM, but one of them will be hidden

##Which approach is better?
*ngIf is usualy better for large element trees. Elements can take substantioal memory and computing resources. Also change detection mechanism tracks invisible elements too

But (!) if building element tree is costly, you shouldn't use ngIf. It's better to keep it in the dom and use 'hidden' attribute

If you are dealing with small tree of objects, it doesn't matter which approach you choose.


##ngFor
```html
<ul>
  <li *ngFor="let course of courses; index as i">
    {{ i }} - {{ course.name }}
  </li>
</ul>
```
here `index` - exported value;
`i` - local variable, which we can use inside the block
https://angular.io/api/common/NgForOf#local-variables

##Changes detection
After the execution of an action method, angular perform it's change detection, it refreshes the dom automaticaly. For example, it can remove items from list or change some items properties.
   
