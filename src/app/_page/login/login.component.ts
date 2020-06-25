import { Component, OnInit,ViewChild } from '@angular/core';
import * as wijmo from '@grapecity/wijmo';
import * as chart from '@grapecity/wijmo.chart';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService} from '../../service/user.service';
import { WjFlexChart } from '@grapecity/wijmo.angular2.chart'; 
import { WjFlexChartAnimation } from '@grapecity/wijmo.angular2.chart.animation'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  PieData2: any[];
  isRootPie:boolean = false;
  private _sum: number;
  @ViewChild('flexPie') flexPie: WjFlexChart;
  @ViewChild('pieAnimation') pieAnimation: WjFlexChartAnimation;
  public animationMode = 'Point';
  public seletedItems ="";
  private _view: wijmo.CollectionView;
  dataBar: wijmo.CollectionView;
  dataLine: wijmo.CollectionView;
  dataPei: wijmo.CollectionView;
  rootData: wijmo.CollectionView;
  constructor(private route: ActivatedRoute,public router: Router,public _service:UserService) { 
    this._view = _service.getData();
    this.rootData = _service.getGroupData(this._view);
    this.dataBar = this.rootData;
    this.dataLine = this.rootData;
    this.dataPei = this.rootData;
    //this.data2 = _service.getPieData();
    //this.PieData2 = _service.getPieData();
    
  }
  getLabelContent = (ht: chart.HitTestInfo) => {
    return wijmo.format('{name}', { name: ht.name, val: ht.value / this._sum });
  }
  ngOnInit(): void {
    
  }
  
  getItemsSel(evn){
    console.log(this.rootData);
    this.pieAnimation.animate();
    let point = this.rootData.currentItem;
    if (point && point.group && !point.group.isBottomLevel && !this.isRootPie) {
      this.dataPei = this._service.getGroupData(point.group);
      this.isRootPie = true;
    }
    
  }
  pieBack(){
    this.pieAnimation.animate();
    this.dataPei = this.rootData;
    this.isRootPie = false;
    
  }
}
