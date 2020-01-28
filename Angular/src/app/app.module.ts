import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guards';
import { loginService } from './login/login.service';

const appRoutes : Routes =[
  {path : 'login',component : loginComponent,canActivate:[authGuard] },
  {path : 'home',component : HomeComponent,canDeactivate:[authGuard] }
];
@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
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
