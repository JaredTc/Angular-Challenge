// features/users/state/user.facade.ts

import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, combineLatest, finalize, map, of, tap} from 'rxjs';

import {HeaderUser, TableUser, UserModel, UserViewModel} from '../models/user.model';
import {UserService} from '../services/user.service';
import {Helper} from '../../../util/helper';

@Injectable({providedIn: 'root'})
export class UserFacade {

  // ----- STATE -----

  private userlistSubject = new BehaviorSubject<UserModel[]>([]);
  userList$ = this.userlistSubject.asObservable();
  private usersSubject = new BehaviorSubject<UserViewModel[]>([]);
  users$ = this.usersSubject.asObservable();
  private selectedUserSubject = new BehaviorSubject<UserModel | null>(null);
  selectedUser$ = this.selectedUserSubject.asObservable();
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();
  private tableSubject = new BehaviorSubject<TableUser[]>([]);
  table$ = this.tableSubject.asObservable();
  private headersSubject = new BehaviorSubject<HeaderUser[]>([]);
  headers$ = this.headersSubject.asObservable();

  constructor(private userApi: UserService) {
  }

  // ----- ACTIONS -----

  vm$ = combineLatest([
    this.users$,
    this.headers$
  ]).pipe(
    map(([users, headers]) => ({ users, headers }))
  );

  loadUsers(): void {
    if (this.usersSubject.value.length > 0) return;

    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    this.userApi.getUsers().pipe(
      map(users =>  Helper.mapToViewModel(users)),
      tap(viewUsers => {
        console.log(viewUsers)
          this.headersSubject.next(Helper.generateHeaders(viewUsers));
        this.usersSubject.next(viewUsers);
      }),
      catchError(() => {
        this.errorSubject.next('Error loading users');
        this.usersSubject.next([]);
        return of([]);
      }),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe();
  }


  selectUser(user: UserModel | null): void {
    this.selectedUserSubject.next(user);
  }

  clearSelection(): void {
    this.selectedUserSubject.next(null);
  }
}
