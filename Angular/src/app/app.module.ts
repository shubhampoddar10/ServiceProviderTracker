import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './login/login.component';
import {  employeeComponent } from './employee/employee.component';
import { authGuard } from './auth.guards';
import { loginService } from './login/login.service';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes =[
  {path : '',component : HomeComponent },
  {path : 'login',component : loginComponent,canActivate:[authGuard] },
  {path : 'employee',component : employeeComponent,canDeactivate:[authGuard] }
];
@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    employeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
