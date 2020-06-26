import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarCharComponent } from './bar-char/bar-char.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';



@NgModule({
  declarations: [BarCharComponent, LineChartComponent, PieChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
