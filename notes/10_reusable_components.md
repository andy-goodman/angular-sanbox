#Reusable components

In order to make a component more reusable, you need to make a batch of input and output properties

##Input properties
We use input properties to pass input or state to the component

There are two ways to mark field as an input property
1) annotate field with @Input
```
@Input('isFavorite')
isFavorite: boolean;
```

Also we can skip it's name in decorator, because it is recommended not to change it. So nothing wrong with skipping it
```
@Input()
isFavorite: boolean;
```
It calls alias. IT is not recommended by the validator

2) "Magic" string

Not recommended, makes refactoring harder https://angular.io/guide/styleguide#style-05-12 

```
@Component({
  ...
  inputs: ['isFavorite']
})
```

##Output properties
We use output properties to raise events from this custom component

Declaring an output field
```
@Output()
change = new EventEmitter();
```

Somewhere in code
```
this.change.emit();
```

In parent component template
```
<app-favorites
  [isFavorite]="post.isFavorite"
  (change)="onFavoriteChanged()"
></app-favorites>
```

onFavoriteChanged is a method in a parent component

### Passing data along with output event
Parameter of the emit method will bw available in all subscribers of the event.
Put any parameter in emit mothod and catch it in onFavoriteChanged

In template mention it with $event parameter
```
<app-favorites
  [isFavorite]="post.isFavorite"
  (change)="onFavoriteChanged($event)"
></app-favorites>
```  

Aliases in output properties is also banned by the validator
```
@Output('click') // don't do it, but syntax exists
click = new EventEmitter();
```

##API
The combination of import and output properties for a component make up what we call the public API for the component
