import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

    private role: string = 'rrhh';

    constructor() { }

    hasRrhhAccess(): boolean {
      return this.role === 'rrhh';
    }

}
