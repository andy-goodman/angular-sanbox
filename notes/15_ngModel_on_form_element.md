# Template-driven forms

## ngModel directive

```html
<input ngModel name="firstName" id="firstName" type="text" class="form-control"
  #ngModelObject="ngModel" (change)="log(ngModelObject)" <!-- just to view NgModel object in console ---> 
/>
```

We use this form control class to track state changes and the validity of the input fields.
When we apply the ngModel directive along with the name attribute on an input field

Angular automaticaly creates an instance or the FormControl class and associates it with this input field


## Form classes
To track the state of input fields and their validity

**FormControl** represents one input field (input, text area etc.)
If you apply ngModel directive to one input field, Angular will automaticaly create a FormControl object and associate it to an input field.
 
**FormGroup** represents a group of elements (or entire form)
~~ngForm~~ directive is automatically applied to all <form/> elements.
And this will create a FormGroupElement and associate it with your form.
ngModelGroup

With this FormGroup object we can track the state changes in your form and check it's validity.

If you have a complex form with multiple subgroups, we can optionally apply the ~~ngModelGroup~~ directive to the subgroup.
And this directive, similar to ngFor directive will create a FormGroup object to the form group.

The difference between ngForm and ngFormGroup: ngForm directive exposes an output property ngSubmit, that uses to handle a submit event of form 
