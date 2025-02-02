import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:8080/user/"

  addUser(data:any):Observable<any>{
    return this.http.post(this.apiUrl+'registerUser',data)
  }

  login(data:any):Observable<any>{
    return this.http.post(this.apiUrl+"userLogin/"+data.email+"/"+data.password,data)
  }
  
}
