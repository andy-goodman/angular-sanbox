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

##Event filtering
To enter filter key pressed

Vanila javascript way
```html
<input (keyup)="onKeyUp($event)" />
```
```javascript
onKeyUp($event) {
  if ($event.keyCode === 13) {
    console.log('Enter was pressed');
  }
}
```

Angular event filtering
```html
<input (keyup.enter)="onEnterKey()" />
```

```javascript
onEnterKey() {
  console.log('Enter key pressed (onEnterKey detected)');
}
```

Here we don't have to check key code in js
