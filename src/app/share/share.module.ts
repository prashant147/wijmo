import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarCharComponent } from './bar-char/bar-char.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart'; 
import { WjChartAnimationModule } from '@grapecity/wijmo.angular2.chart.animation';

@NgModule({
  declarations: [BarCharComponent, 
    PieChartComponent, DoughnutChartComponent
  ],
  exports:[BarCharComponent,
     PieChartComponent, DoughnutChartComponent
  ],
  imports: [
    WjChartModule,WjChartAnimationModule,
    CommonModule
  ]
})
export class ShareModule { }
