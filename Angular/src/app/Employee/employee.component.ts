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

        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl(null,Validators.required),
        dob: new FormControl(null, Validators.required),
        mobile: new FormControl(null, Validators.required),
        panno: new FormControl(null, Validators.required),
        password: new FormControl(null, [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)])
    })

}

