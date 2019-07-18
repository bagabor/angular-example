import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { MyChartModule } from './nested-components/chart-component/chart.module';
import { DataTableModule } from './nested-components/data-table-component/data-table.module';

@NgModule({
  declarations: [ChartContainerComponent],
  imports: [
    CommonModule,
    MyChartModule,
    TabMenuModule,
    DataTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartContainerModule { }
