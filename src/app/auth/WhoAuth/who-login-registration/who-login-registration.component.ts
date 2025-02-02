import { Component } from '@angular/core';
import { WhoService } from '../../../service/who.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-login-registration',
  templateUrl: './who-login-registration.component.html',
  styleUrl: './who-login-registration.component.css'
})
export class WhoLoginRegistrationComponent {

  constructor(private _whoService:WhoService,private _router:Router){
    this.init()
  }

  whoLoginForm!:FormGroup

  init(){
    this.whoLoginForm = new FormGroup({
      "email":new FormControl(),
      "password": new FormControl()
    })
  }

  loginWho(){
    console.log(this.whoLoginForm.value)
    this._whoService.login(this.whoLoginForm.value).subscribe((res)=>{
      if(res != null){
        console.log("Welcome WHO Organizagtion")
        sessionStorage.setItem('whoData',JSON.stringify(res))
        this._router.navigateByUrl('/who-dashboard')
      }else{
        alert("Please ENter Valid Credentials")
      }
    })
  }

}
