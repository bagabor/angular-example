import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './chart/chart.component';
import { DateSideBarModule } from './date-side-bar/date-side-bar.module';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    DateSideBarModule
  ]
})
export class MyChartModule { }
