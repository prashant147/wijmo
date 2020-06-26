import { Component, OnInit,ViewChild } from '@angular/core';
import * as wijmo from '@grapecity/wijmo';
import * as chart from '@grapecity/wijmo.chart';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _view: wijmo.CollectionView;
  dataBar: wijmo.CollectionView;
  dataLine: wijmo.CollectionView;
  dataPei: wijmo.CollectionView;
  rootData: wijmo.CollectionView;

  public BarService:any =[
    {"name":"GDP" , "binding": "gdp" },
    {"name":"GDP 1" , "binding": "gdp1" },
    {"name":"GDP 2" , "binding": "gdp2" }];
  public lineService:any =[{"name":"GDP" , "binding": "gdp" }];
  public pieService:any ={"name":"GDP" , "binding": "gdp" };

  constructor(private route: ActivatedRoute,public router: Router,public _service:UserService) { 
    this._view = _service.getData();
    this.rootData = _service.getGroupData(this._view);
    this.dataBar = this.rootData;
    this.dataLine = this.rootData;
    this.dataPei = this.rootData;
   
  }
  
  ngOnInit(): void {
    
  }
  
  getItemsSel(evn){
    console.log(this.rootData);
    /*
    let point = this.rootData.currentItem;
    if (point && point.group && !point.group.isBottomLevel && !this.isRootPie) {
      this.dataPei = this._service.getGroupData(point.group);
      this.isRootPie = true;
     // this.pieAnimation.animate();
    }
   */
  }
  pieBack(){
   
    this.dataPei = this.rootData;
    //this.isRootPie = false;
   // this.pieAnimation.animate();
  }
}
