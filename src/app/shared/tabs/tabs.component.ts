import { Component, OnInit } from '@angular/core';
import { TabsConfig } from './tabs.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabConfig: TabsConfig;

  constructor() { }

  ngOnInit() {
    // const color = ;

    this.tabConfig = {
      color: 'rgb(123, 255, 0)',
      tabs: [{
        label: 'Active',
        url: ''
      }, {
        label: 'Link',
        url: 'x'
      }, {
        label: 'Link',
        url: 'y'
      }]
    };

  }



}
