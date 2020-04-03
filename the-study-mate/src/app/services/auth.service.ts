import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authorize () : Promise<boolean> {
    return Promise.resolve(false);
  }
}
