import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalhostService } from './localhost.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
constructor(private service: LocalhostService, private router: Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if( ! this.service.isAdminLoggedIn()){
      this.router.navigate(['']);
      return false;
    }
    else {
        return this.service.isAdminLoggedIn();
    }
  }
  
}