import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  public doSendEmail() {
    console.log('some emails has been just sent');
  }
}
