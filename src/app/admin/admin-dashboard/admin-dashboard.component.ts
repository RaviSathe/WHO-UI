import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {


  allUsers:any = []
  getType: any = '';
  totalUser:any
  totalwho:any
  constructor(private _adminSer:AdminService){
    this.getAllUsers('user')
    this.getType = ''
    setTimeout(() => {
      this.getAllUsers('who')
      this.getType = ''
    }, 500);
  }

  getAllUsers(type:any){
    console.log(type)
    if(type === 'user'){
      this.getType = 'user'
      this._adminSer.getAllUsers().subscribe((res)=>{
        this.allUsers = res
        this.totalUser = this.allUsers.length
        console.log(this.allUsers)
      })
    }else{
      this.getType = 'who'
      this._adminSer.getAllWhos().subscribe((res)=>{
        this.allUsers = res
        this.totalwho = this.allUsers.length
        console.log(this.allUsers)
      })
    }
  }


  removeUser(i:any){
    console.log(i)
    if(confirm("Do you want to delet that user Permanently?")){
      this._adminSer.deleteUserById(i).subscribe((res)=>{
        console.log(res)
        this.getAllUsers('user')
      })
    }
  }

  removeWho(i:any){
    console.log(i)
    if(confirm("Do you want to delet that user Permanently?")){
      this._adminSer.deleteWhoById(i).subscribe((res)=>{
        console.log(res)
        this.getAllUsers('who')
      })
    }
  }

  getHomeMap(){
    this.getType = ''
  }

}
