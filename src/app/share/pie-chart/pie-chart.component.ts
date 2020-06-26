import { Component, OnInit,ViewChild,Input,Output,EventEmitter } from '@angular/core';
import * as wijmo from '@grapecity/wijmo';
import { UserService } from '../../service/user.service';
import { WjFlexChart } from '@grapecity/wijmo.angular2.chart';
import { WjFlexChartAnimation } from '@grapecity/wijmo.angular2.chart.animation';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  
  @ViewChild('pieChart') pieChart: WjFlexChart;
  @ViewChild('pieAnimation') pieAnimation: WjFlexChartAnimation;
  
  @Input("headerTitle") headerTitle:string ; 
  @Input("dataSource") dataSource:wijmo.CollectionView ; 
  @Input("stacking") stacking:string ;   
  @Input("chartType") chartType:string ;
  @Input("bindingX") bindingX:string ;
  @Input("service") service:any ;
  @Input("drillDown") drillDown:boolean = false ;
  
  @Output("selectItems") clickEvent:EventEmitter<any> = new EventEmitter<any>(); 

  public dataPei: wijmo.CollectionView;
  public isRootPie:boolean = false;

  public duration= 900;
  public easing="Linear";
  public animationMode = 'Point';

  constructor(public _service:UserService ) { }

  ngOnInit(): void {
    var obj = this;
    this.dataPei = this.dataSource;
    
  }
  itemChanged(e){
    if(this.clickEvent){ 
      let point = this.dataSource.currentItem;
      if(this.drillDown){
        if (point && point.group && !point.group.isBottomLevel) {
          this.dataPei = this._service.getGroupData(point.group);
          this.isRootPie = true;
        }
      }else{
        this.clickEvent.emit(point);
      }
    }
  }
  pieBack(){
    if(this.isRootPie){
      this.dataPei = this.dataSource;
      this.isRootPie = false;
     // this.isRootPie.pop();
    }
  }
}
