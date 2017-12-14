import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.url[0].path === 'signup') {
      return false;
    } else {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/signin']);
      }
    }
  }

  canLoad(route: Route) {
    return false;
  }
}
