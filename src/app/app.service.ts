import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  isLoggedIn() {
    const userPayload = localStorage.getItem('show');
    if (userPayload) {
      return true;
    } else {
      return false;
    }
  }
}
