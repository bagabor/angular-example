import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MyChartModule } from '../chart-component/chart.module';
import { ChartContainerComponent } from './chart-container/chart-container.component';

@NgModule({
  declarations: [ChartContainerComponent],
  imports: [
    CommonModule,
    MyChartModule,
    TabMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartContainerModule { }
