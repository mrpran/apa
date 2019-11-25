import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private toast: ToastrService ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('username')) {
            return true;
        }

        this.toast.error("Please Login First !");
        this.router.navigate(['/keycloak-login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}