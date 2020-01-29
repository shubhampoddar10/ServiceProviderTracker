import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class employeeComponent {



    employeeForm = new FormGroup({

        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        mobileNo: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),  
        panNo: new FormControl(null, Validators.required),
        adharNo: new FormControl(null,Validators.required),
        adress: new FormControl(null,Validators.required),
        gender: new FormControl(null,Validators.required),
        qualification: new FormControl(null,Validators.required)
    })

}

