import { Component, OnInit,ViewChild,Input,Output,EventEmitter } from '@angular/core';
import { WjFlexChart } from '@grapecity/wijmo.angular2.chart'; 
import { WjFlexChartAnimation } from '@grapecity/wijmo.angular2.chart.animation'; 

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @ViewChild('flexPie') flexPie: WjFlexChart;
  @ViewChild('pieAnimation') pieAnimation: WjFlexChartAnimation;
 
  @Input("headerTitle") headerTitle:string ; 
  @Input("dataSource") dataSource:any ; 
  @Input("stacking") stacking:string ;   
  @Input("chartType") chartType:string ;
  @Input("bindingX") bindingX:string ;
  @Input("service") service:any ;
  
  @Output("selectItems") clickEvent:EventEmitter<any> = new EventEmitter<any>(); 


  public isRootPie:boolean = false;
  public animationMode = 'Point';

  constructor() { }

  ngOnInit(): void {
  }
  itemChanged(e){

  }
  pieBack(){

  }
}
