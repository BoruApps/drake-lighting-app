import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AppConstants} from '../providers/constant/constant';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss'],
})
export class MapCardComponent implements OnInit {
  properties: Object;

  constructor(private  router:  Router, public appConst: AppConstants) {
    this.properties = this.appConst.getProperties();
  }
  detailView(property: any){
    console.log('going to detail view', property)
    this.router.navigate(['property-images', property]);
  }

  ngOnInit() {
  }

}
