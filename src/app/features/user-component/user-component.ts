import {Component, OnInit} from '@angular/core';
import {UserFacade} from './state/user.facade';
import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import {Observable} from 'rxjs';
import {HeaderUser, UserModel} from './models/user.model';
import {UserService} from './services/user.service';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';
import {Select} from 'primeng/select';
import {Helper} from '../../util/helper';
import {TableUsers} from './components/table-users/table-users';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-component',
  imports: [
    AsyncPipe,
    TableModule,
    Button,
    CommonModule,
    TableUsers,
    FormsModule,
  ],
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent implements OnInit{
  searchTerm: string = '';
  filter = [
    {label: 'All', value: null},
    {label: 'City', value: 'City'},
  ]

  constructor(public facade: UserFacade,) {
  }

  ngOnInit() {
    this.facade.loadUsers();
  }


  protected readonly Helper = Helper;

}
