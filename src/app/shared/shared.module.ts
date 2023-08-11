import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDynamicColumsComponent } from './table-dynamic-colums/table-dynamic-colums.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

const components = [
  TableDynamicColumsComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],
  exports: components
})
export class SharedModule { }
