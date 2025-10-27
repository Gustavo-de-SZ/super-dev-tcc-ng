import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})  
export class UserService {

  private mockUser: User = {
    id: '1',
    name: 'user',
    email: 'user@teste',
    phone: '0000000000',
    avatarUrl: ''
  };

  getUser(): Observable<User> {
    return of(this.mockUser);
  }

  updateUser(data: User): Observable<User> {
    this.mockUser = { ...this.mockUser, ...data };
    return of(this.mockUser);
  }
}
