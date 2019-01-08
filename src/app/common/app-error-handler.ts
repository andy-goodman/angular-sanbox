import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    alert('Unhandled error! (global error handler)');
    console.log(error);
  }

}
