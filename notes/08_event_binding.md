#Event binding

To call the component method on some action

```html
<button (click)="onSave($event)">Save</button>
```

$event is a DOM event

##Event bubbling

```html
<div (click)="onDivClicked()">
   <button class="btn btn-primary" (click)="onSave($event)">Save</button>
</div>
```

Both, onDivClicked and onSave will be run, if the button was pressed
The event bubbles up.

To stop bubbling:
```typescript
  private onSave($event) {
    $event.stopPropagation();
    // other
  }
```
