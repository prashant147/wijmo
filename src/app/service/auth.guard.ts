import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router ,ActivatedRoute} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if(sessionStorage.getItem("token")!=null){
        return true;
       }else{
        this.router.navigate(['./login']);
        return false;
       }
  }
  
}
