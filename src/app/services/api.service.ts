import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  signUpUser(
    username: string,
    password: string,
    confirmPassword: string
  ): Observable<User> {
    const body = {
      username,
      password,
      confirmPassword,
    };

    return this.http.post<User>(environment.apiUrl + '/users', body);
  }
}
