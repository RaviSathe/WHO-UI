import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhoService {

    apiUrl = "http://localhost:8080/who/"

  constructor(private http:HttpClient) { }

  addWho(data:any):Observable<any>{
      return this.http.post(this.apiUrl+'registerWho',data)
    }
  
    login(data:any):Observable<any>{
      return this.http.post(this.apiUrl+"whoLogin/"+data.email+"/"+data.password,data)
    }

  addProduct(data:any){
    return this.http.post(this.apiUrl+"product/addProduct",data)
  }

  getMyProduct(){
    return this.http.get(this.apiUrl+"product/getMyProduct")
  }

  deleteProductByID(id:any){
    return this.http.delete(this.apiUrl+"product/"+id)
  }
}
