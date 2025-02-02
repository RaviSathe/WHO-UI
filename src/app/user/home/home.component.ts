import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import { WhoService } from '../../service/who.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userData: any;
  islogin:boolean = false
  productList:any
  addressTab: boolean = false;
  addressForm!:FormGroup
  proID: any;

  constructor(private _router:Router,private _userService:UserServiceService,private _whoService:WhoService){

  }

  ngOnInit(){
    if(sessionStorage.getItem('userData')){
      let data:any = sessionStorage.getItem('userData')
      this.userData = JSON.parse(data)
      this.islogin = true
      this.init()
      this.getAllData()
    }else{
      alert("Please Login before accessing this page!")
      this.islogin = false
      this._router.navigateByUrl('')
    }
  }

  init(){
    this.addressForm = new FormGroup({
      'address1': new FormControl(''),
      'address2': new FormControl(''),
      'address3': new FormControl(''),
      'pincode': new FormControl(''),
    })
  }

  getAllData(){
    this._whoService.getMyProduct().subscribe((res)=>{
      console.log(res)
      this.productList = res
    })
  }

  onLoginClick(){
    if(confirm("Do you want to logout?")){
      this.islogin = false
      sessionStorage.clear()
      this._router.navigateByUrl('')
    }
  }

  orderProduct(id:any){
    this.addressTab = true
    this.proID = id
  }

  orderAndDeletFormDatabase(){
    if(this.addressForm.value.address1 === ''){
      alert("Please Enter Address 1")
    }else if(this.addressForm.value.address2 === ''){
      alert("Please Enter Address 2")
    }else if(this.addressForm.value.address3 === ''){
      alert("Please Enter Address 3")
    }else if(this.addressForm.value.pincode === ''){
      alert("Please Enter Pincode")
    }else{
      console.log(this.addressForm.value)
      alert("Product will be Delevered by WHO")
      this._whoService.deleteProductByID(this.proID).subscribe((res)=>{
        console.log(res)
        this.addressTab = false
      })
    }
  }

}
