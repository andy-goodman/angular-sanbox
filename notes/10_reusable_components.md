#Reusable components

In order to make a component more reusable, you need to make a batch of input and output properties

##Input properties
We use input properties to pass input or state to the component


##Output properties
We use output properties to raise events from this custom component

There are two ways to mark field as an input property
1) annotate field with @Input
```
@Input('isFavorite')
isFavorite: boolean;
```

The combination of import and output properties for a component make up what we call the public API for the component
