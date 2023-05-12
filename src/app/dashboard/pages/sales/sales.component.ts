import { Component, ElementRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from 'src/app/template/demo/api/customer';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
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
