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
   
By default angular tracks objects by their identity - object address in the memory. We can instruct angular to use a different mechnism to track objects.

```html
<li *ngFor="let course of courses; trackBy: trackCourse">
  {{ course.name }}
</li>
```

If you are dealing with a large list with a complex markup and you do observe performance problems, you can use trabkBy to upgrade performance.

In a simple page you can not worry about it, because you have to write more code and can not get any benefits, angular works well from the box here.


##ngClass
attribute directive
```
[class.glyphicon-star]="isFavorite"
[class.glyphicon-star-empty]="!isFavorite"
```

```
[ngClass]="{
  'glyphicon-star': isFavorite,
  'glyphicon-star-empty': !isFavorite
}"
```

Key-value pairs, were key is a class name, and value is a condition, on which this class will be rendered in the DOM


##ngStyle
```
<button
  [style.backgroundColor]="canSave ? 'blue' : 'gray'"
  [style.color]="canSave ? 'white' : 'black'"
  [style.fontWeight]="canSave ? 'bold' : 'normal'"
  >
  Save
</button>
```
is equals to
```
<button
  [ngStyle]="{
    'backgroundColor': canSave ? 'blue' : 'gray',
    'color': canSave ? 'white' : 'black',
    'fontWeight': canSave ? 'bold' : 'normal'
  }"
  >
  Save
</button>
```

##Custom directive
To build a custom directive, use @HostListener to subscribe to the event raised by DOM object. You can pass data into a directive, using input properties. If you have only one property, we can use thr selector of that directive as an alias of that property.  
Example InputFormatDirective
