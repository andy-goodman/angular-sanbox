import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') !== -1 ) {
      return { cannotContainSpace: true }; // user a complex object to provide additional info to the client
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('requiring to server');
        if (control.value === 'Andy') {
          resolve ({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
