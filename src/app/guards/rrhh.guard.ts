import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FakeAuthService } from '../servicios/fake-auth.service';


@Injectable({
  providedIn: 'root'
})
export class RrhhGuard implements CanActivate {

  constructor(private fakeAuthService: FakeAuthService,
              private router: Router) {}

  canActivate() {
    if (this.fakeAuthService.hasRrhhAccess()) {
      return true;
    } else {
      this.router.navigate(['/sin-permisos']);
      return false;
    }
  }  
}
