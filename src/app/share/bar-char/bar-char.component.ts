import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar-char',
  templateUrl: './bar-char.component.html',
  styleUrls: ['./bar-char.component.scss']
})
export class BarCharComponent implements OnInit {
  @Input("headerTitle") headerTitle:string ; 
  @Input("dataSource") dataSource:any ; 
  @Input("stacking") stacking:string ;   
  @Input("chartType") chartType:string ;
  @Input("bindingX") bindingX:string ;
  @Input("service") service:any ;
  
  @Output("selectItems") clickEvent:EventEmitter<any> = new EventEmitter<any>(); 


  constructor() { }

  ngOnInit(): void {
  }
  itemChanged(e){

  }
}
