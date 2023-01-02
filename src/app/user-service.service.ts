import { Injectable } from '@angular/core';
import UserModel from './model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userData: UserModel[] = [
    {id:1, name: 'Baban', email: 'baban@gmail.com', phone: '9888102057', username: 'xcal0412'}
  ]
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }

  addUsers(user: UserModel){
    this.userData.push(user);
  }
  
}
