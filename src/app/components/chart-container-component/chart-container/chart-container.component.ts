import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit {

  @ViewChild('tabMenu', { static: false }) menu: MenuItem[];

  items: MenuItem[];
  activeItem: MenuItem;  

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Chart', icon: 'pi pi-chart-bar' },
      { label: 'Raw Data', icon: 'pi pi-list' },
      { label: 'Documentation', icon: 'pi pi-info' }
    ];
    this.activeItem = this.items[0];
  }

  activateMenu() {
    this.activeItem = this.menu['activeItem'];
  }
}
