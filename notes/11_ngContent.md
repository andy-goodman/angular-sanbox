#ngContent
Use ngContent to build a reusable components and you want a consumers of this component to provide a content

In template of a consumer component place it
```
<app-bootstrap-panel>
  <div class="heading"></div>
  <div class="body">
    <h2>Body</h2>
    <p>Some content here</p>
  </div>
</app-bootstrap-panel>
``` 

In a template of a target component place and ng-content tag

```
<div class="panel panel-default">
  <div class="panel-heading">
    <ng-content select=".heading"></ng-content>
  </div>
  <div class="panel-body">
    <ng-content select=".body"></ng-content>
  </div>
</div>
```

To get of a noisy divs in a result page use ng-container 

```
<app-bootstrap-panel>
  <!-- div.heading+div.body -->
  <ng-container class="heading">
    <h1>Heading</h1>
  </ng-container>
  <ng-container class="body">
    <h2>Body</h2>
    <p>Some content here</p>
  </ng-container>
</app-bootstrap-panel>
```
