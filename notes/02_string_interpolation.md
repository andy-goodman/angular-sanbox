# String interpolation

make a property or method in component class and use it in template
`<h2>{{title}}</h2>` or `<h2>{{ getTitle() }}</h2>`

    <!-- String interponation -->
    <h2>{{ title }}</h2>
    <!-- Property binding -->
    <h2 [textContent]="title"></h2>
    
    <!-- String interponation -->
    <img src="{{ imageUrl }}" />
    <!-- Property binding -->
    <img [src]="imageUrl" />
    
Important thing about property binding - it works only one way, from the component to the DOM.
If field in the component changes, angular will update the DOM.
But any changes in the DOM will not reflect back into the component. For example, filling input fields will not effect component.
