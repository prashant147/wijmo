import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { WjFlexChart } from '@grapecity/wijmo.angular2.chart'; 
import { WjFlexChartAnimation } from '@grapecity/wijmo.angular2.chart.animation'; 
import * as wijmo from '@grapecity/wijmo';

@Component({
  selector: 'app-bar-char',
  templateUrl: './bar-char.component.html',
  styleUrls: ['./bar-char.component.scss']
})
export class BarCharComponent implements OnInit {
  @Input("headerTitle") headerTitle:string ; 
  @Input("dataSource") dataSource:wijmo.CollectionView  ; 
  @Input("stacking") stacking:string ="";   
  @Input("chartType") chartType:string ;
  @Input("bindingX") bindingX:string ;
  @Input("service") service:any ;
  @Input("drillDown") drillDown:boolean = false ;
  
  public dataPei: wijmo.CollectionView;
  @Output("selectItems") clickEvent:EventEmitter<any> = new EventEmitter<any>(); 

  @ViewChild('flexPie') flexPie: WjFlexChart;
  @ViewChild('pieAnimation') pieAnimation: WjFlexChartAnimation;

  constructor() { }

  ngOnInit(): void {
     this.dataPei = this.dataSource;
  }
  itemChanged(e){
    if(this.clickEvent){
      let point = this.dataPei.currentItem;
      this.clickEvent.emit(point);
      this.pieAnimation.animate();
    }
  }
}
