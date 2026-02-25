import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {environment} from '../../../environment/environment';
import {UserModel} from '../models/user.model';
import {endpoints} from '../../../core/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUri = environment.apiUrl;

  constructor(private  http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    const url = this.apiUri + endpoints.users;
    return this.http.get<UserModel[]>(url);
  }



}
