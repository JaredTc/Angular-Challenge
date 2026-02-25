import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Table, TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {Helper} from '../../../../util/helper';
import {HeaderUser, UserViewModel} from '../../models/user.model';

@Component({
  selector: 'app-table-users',
  imports: [
    TableModule,
    CommonModule,
  ],
  templateUrl: './table-users.html',
  styleUrl: './table-users.scss',
})
export class TableUsers {
  @Input() users: UserViewModel[] = [];
  @Input() header:HeaderUser[] = [];
  @Input() filterText: string = '';

  @ViewChild('dt') dt!: Table;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterText'] && this.dt) {
      this.dt.filterGlobal(this.filterText, 'contains');
    }
  }
  protected readonly Helper = Helper;
}
