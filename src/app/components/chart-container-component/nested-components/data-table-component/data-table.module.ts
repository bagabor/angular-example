import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }
