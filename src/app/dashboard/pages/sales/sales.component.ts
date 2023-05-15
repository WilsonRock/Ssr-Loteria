import { Component, ElementRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  customers1 = [];
  loading: boolean = false;
  representatives = [];
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
