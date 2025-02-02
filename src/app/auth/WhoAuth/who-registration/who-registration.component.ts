import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WhoService } from '../../../service/who.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-registration',
  templateUrl: './who-registration.component.html',
  styleUrl: './who-registration.component.css'
})
export class WhoRegistrationComponent {


  whoRegistrationForm!:FormGroup

  constructor(private dataPipe:DatePipe, private _whoService:WhoService,private _router:Router){
    let date = new Date();
    let formattedDate = this.dataPipe.transform(date, 'dd-MM-yyyy');
    this.whoRegistrationForm = new FormGroup({
      "organizationName" : new FormControl(),
      "location" : new FormControl(),
      "registrationDate" : new FormControl(formattedDate),
      "registrationNo" : new FormControl(),
      "email" : new FormControl(),
      "password" : new FormControl()
    })
  }


  registerWho(){
    this._whoService.addWho(this.whoRegistrationForm.value).subscribe((res)=>{
      if(res != null){
        console.log("WHO Registered Successfully")
        this._router.navigateByUrl('/WhoLogin')
      }else{
        console.log("Something went Wrong")
      }
    })
  }


}
