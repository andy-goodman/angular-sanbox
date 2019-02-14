import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  private contactMethods = [
    {id: 1, name: 'E-mail'},
    {id: 2, name: 'Phone'}
  ];

  log(message: HTMLInputElement) {
    console.log('message', message);
  }

  submit(form) {
    console.log('submit', form);
    console.log('values', form.value);
  }

}
