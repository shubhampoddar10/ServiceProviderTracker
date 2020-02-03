import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector:'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class employeeComponent{
    constructor(private router:Router){}

    employeeForm = new FormGroup({

        firstName: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        lastName: new FormControl(null,  [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        mobileNo: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),  
        panNo: new FormControl(null, Validators.required),
        adhaarNo: new FormControl(null,Validators.required),
        adress: new FormControl(null,Validators.required),
        gender: new FormControl(null),
        qualification: new FormControl(null,Validators.required)
    })

   logout(){
       this.router.navigate([''])





   }
    
}