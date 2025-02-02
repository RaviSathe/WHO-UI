import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  public getAllUsers(){
    return this.http.get(this.apiUrl+"user/getAllUsers")
  }

  public getAllWhos(){
    return this.http.get(this.apiUrl+"who/getAllWho")
  }

  public deleteUserById(id:any){
    return this.http.delete(this.apiUrl+"user/"+id)
  }

  public deleteWhoById(id:any){
    return this.http.delete(this.apiUrl+"who/"+id)
  }
}
