import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Promise<boolean> | Observable<boolean> {
    return this.auth();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.auth();

  }


  private auth(): Promise<boolean> {
    return this.authService.authorize().then(result => {
      if (!result) {
        this.router.navigate(['access-denied']);
      }
      return result;
    });
  }
}
