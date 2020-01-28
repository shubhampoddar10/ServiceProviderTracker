import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class authGuard{
    canActivate():boolean{
        return confirm("Do you want to login?");
    };
    canDeactivate():boolean{
        return confirm("Do You want to Logout?");
    }
};