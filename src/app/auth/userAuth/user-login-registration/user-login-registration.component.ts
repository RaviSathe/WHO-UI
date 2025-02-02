import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-registration',
  templateUrl: './user-login-registration.component.html',
  styleUrl: './user-login-registration.component.css'
})
export class UserLoginRegistrationComponent {
islogin: boolean = false;

  constructor(private _toaster:ToastrService,private userService:UserServiceService,private _router:Router){}

  userLoginform!:FormGroup
  userRegistrationForm!:FormGroup

  ngOnInit(){
    this.userLoginform = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl(''),
      'checkMe': new FormControl(false),
    })

    this.userRegistrationForm = new FormGroup({
      'firstname': new FormControl(''),
      'lastname': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
    })
  }

  login(){
    console.log(this.userLoginform.value)
    if(!this.userLoginform.value.checkMe){
      alert("Please Check the checkbox")
    }else if(this.userLoginform.value.email === ''){
      alert("Please Enter Mail Id")
    }else if(this.userLoginform.value.password === ''){
      alert("Please Enter Password")
    }else{
      this.userService.login(this.userLoginform.value).subscribe((res)=>{
        if(res != null){
          sessionStorage.setItem('userData',JSON.stringify(res))
          console.log(res)
          console.log("Login SuccessFull")
          this._router.navigateByUrl('/home')
        }else{
          console.log("Please Enter Correct Mail ID or Password")
        }
      })
    }
  }

  register(){
    console.log(this.userRegistrationForm.value)
    if(this.userRegistrationForm.value.firstname === ''){
      this._toaster.error("Please Enter First Name")
    }else if(this.userRegistrationForm.value.lastname === ''){
      this._toaster.error("Please Enter Last Name")
    }else if(this.userRegistrationForm.value.email === ''){
      this._toaster.error("Please Enter Email")
    }else if(this.userRegistrationForm.value.password === ''){
      this._toaster.error("Please Enter password")
    }else{
      this.userService.addUser(this.userRegistrationForm.value).subscribe((res)=>{
        if(res != null){
          console.log("Registered Successfully")
          this.islogin = true
        }else{
          console.log("Something Went wrong")
        }
      })
    }
  }

  onLoginClick(){
    this.islogin = !this.islogin
  }

}
