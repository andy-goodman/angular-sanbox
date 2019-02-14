import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
     .map(response => {
       console.log(response.json());
       const result = response.json();
       if (result && result.token) {
         console.log('saving to localStorage', 'token', result.token);
         localStorage.setItem('token', result.token);
         return true;
       }
       return false;
     });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    return false;
  }
}

