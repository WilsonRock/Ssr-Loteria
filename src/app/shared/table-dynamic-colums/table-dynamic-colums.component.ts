import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'shared-table-dynamic-colums',
  templateUrl: './table-dynamic-colums.component.html',
  styleUrls: ['./table-dynamic-colums.component.scss']
})
export class TableDynamicColumsComponent {

  constructor() {}
  
  @Input() title: string = '';
  @Input() cols: any[] = [];
  @Input() data: any[] = [];
  
  @ViewChild('filter') filter!: ElementRef;

  loading: boolean = false;

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}
