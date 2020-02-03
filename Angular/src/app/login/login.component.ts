import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class loginComponent  {
    private result: any;

    constructor(private router: Router, private service: loginService) { }

    loginForm = new FormGroup({

            'username': new FormControl(null,
                [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(15)]),
            'password': new FormControl(null,
                [Validators.required,
                Validators.maxLength(15),
                Validators.minLength(8)])
        });
    

    onSubmit() {
        console.log(this.loginForm)

        this.service.getuserdata(this.loginForm.value)
            .subscribe((posRes) => {
            this.result = posRes;
            console.log('this.result', this.result);
            this.router.navigate(['/employee']);
        }, (errRes: HttpErrorResponse) => {
            alert("some error occured");
            if (errRes.error instanceof Error)
                console.log("client side error");
            else {
                console.log("Server side error");
            }
        })
    };
};
