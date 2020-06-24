import { Component, OnInit,ViewChild } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService} from '../../service/user.service';
import { WjFlexChart } from 'wijmo/wijmo.angular2.chart'; 
import { WjFlexChartAnimation } from 'wijmo/wijmo.angular2.chart.animation'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any[];
  data1: any[];
  data2: any[];
  PieData2: any[];
  isRootPie:boolean = false;
  @ViewChild('flexPie') flexPie: WjFlexChart;
  @ViewChild('pieAnimation') pieAnimation: WjFlexChartAnimation;
  public animationMode = 'Point';
  constructor(private route: ActivatedRoute,public router: Router,public _service:UserService) { 
    this.data = _service.getData();
    this.data1 = _service.getData();
    this.data2 = _service.getPieData();
    this.PieData2 = _service.getPieData();
  }

  ngOnInit(): void {
    
  }
  getItemsSel(evn){
    console.log(this.flexPie._selectionIndex);
    this.pieAnimation.animate();
    this.data2 = this.PieData2[this.flexPie._selectionIndex].Chile;
    this.isRootPie = true;
    
  }
  pieBack(){
    this.pieAnimation.animate();
    this.data2 = this.PieData2;
    this.isRootPie = false;
    
  }
}
