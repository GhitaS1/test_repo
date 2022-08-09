import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

const dataAzi: Date = new Date;
let oraCurenta: number = dataAzi.getHours();

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(oraCurenta < 7) {
        window.alert('Nu e deschis!');
        return false;
       }
       return true;
    }
    }
    

