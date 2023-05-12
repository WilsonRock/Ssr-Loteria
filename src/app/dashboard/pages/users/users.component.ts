import { Component, ElementRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from 'src/app/template/demo/api/customer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  customers1: Customer[] = [];
  loading: boolean = false;
  representatives: Representative[] = [];
  statuses: any[] = [];
  activityValues: number[] = [0, 100];
  @ViewChild('filter') filter!: ElementRef;

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}
