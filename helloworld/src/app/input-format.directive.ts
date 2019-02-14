import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat')
  format;

  constructor(private el: ElementRef) { }

  @HostListener('blur')
  onBlur() {
    console.log('on Blur');
    let value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      value = value.toLocaleLowerCase();
    } else {
      value = value.toLocaleUpperCase();
    }
    this.el.nativeElement.value = value;
  }

  @HostListener('focus')
  onFocus() {
    console.log('on Focus');
  }

}
