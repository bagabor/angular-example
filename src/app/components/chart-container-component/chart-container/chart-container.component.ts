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
      { id: 'chartTab', label: 'Chart', icon: 'pi pi-chart-bar' },
      { id: 'dataTab', label: 'Raw Data', icon: 'pi pi-list' },
      { id: 'docTab', label: 'Documentation', icon: 'pi pi-info' }
    ];
    this.activeItem = this.items[0];
  }

  activateMenu() {
    this.activeItem = this.menu['activeItem'];
  }
}
