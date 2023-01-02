import { Component, OnInit } from '@angular/core';
import UserModel from '../model/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  userData : UserModel[] = [];
  user =  {id:1, name: 'prabh', email: 'prabh@gmail.com', phone: '9877108977', username: 'babbu12'};
  
  constructor(private service: UserServiceService){}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(
      data=>{
        this.userData = data;
      }
    )
  }

  // getAllUsers(): UserModel[]{
  //   return this.service.getAllUsers();
  // }

  addUser(){
    return this.service.addUsers(this.user);
  }

}
