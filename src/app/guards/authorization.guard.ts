import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthorizationGuard {
  //-------------------------------------------------------------------------
  constructor(private authService: AuthService, private router: Router) { }
  //-------------------------------------------------------------------------
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isAuthenticated) {
      let requireRoles = route.data['roles'];
      let userRoles:string[]= this.authService.roles;
      for(let role of userRoles)
        {
          if(requireRoles.includes(role))
            {
                 return true;
            }
        }
       return false;
    }
    else {
      this.router.navigateByUrl("/login");
      return false;
    }

  }
}
