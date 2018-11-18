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
