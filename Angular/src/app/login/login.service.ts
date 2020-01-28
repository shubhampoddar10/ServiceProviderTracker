import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class loginService{
    _url = "http://localhost:8080/node"
    constructor(private http:HttpClient){}
    public getuserdata(userdata):Observable<any>{
        return this.http.post<any>(this._url,userdata)
    };
};