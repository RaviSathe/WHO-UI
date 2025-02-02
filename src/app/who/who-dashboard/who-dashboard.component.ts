import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WhoService } from '../../service/who.service';

@Component({
  selector: 'app-who-dashboard',
  templateUrl: './who-dashboard.component.html',
  styleUrl: './who-dashboard.component.css'
})
export class WhoDashboardComponent {

  addProductForm!:FormGroup
  whoData: any;
  formattedDate: any;
  myProductList: any;

  constructor(private _router:Router,private dataPipe:DatePipe,private _service:WhoService){
    let date = new Date();
    this.formattedDate = this.dataPipe.transform(date, 'dd-MM-yyyy');
  }

  ngOnInit(){
    this.init()
    if(sessionStorage.getItem('whoData')){
      let data:any = sessionStorage.getItem('whoData')
      this.whoData = JSON.parse(data)
      console.log(this.whoData)
      console.log(this.whoData.registrationNo)
    this.addProductForm.patchValue({registrationNo:this.whoData.registrationNo})
    }else{
      alert("First Login with your WHO ID")
      this._router.navigateByUrl('/WhoRegistration')
    }
  }

  init(){
    this.addProductForm = new FormGroup({
      'productName': new FormControl(''),
      'category': new FormControl(''),
      'productQuantity': new FormControl(''),
      'registrationNo': new FormControl(''),
      'addedOn': new FormControl(this.formattedDate),
    })

  }

  addProduct(){
    console.log(this.addProductForm.value)
    this._service.addProduct(this.addProductForm.value).subscribe((res)=>{
      console.log(res)
      this.getMyProduct()
    })
  }

  getMyProduct(){
    this._service.getMyProduct().subscribe((res)=>{
      console.log(res)
      this.myProductList = res
    })
  }

  removeMyProduct(id:any){
    
  }
}
