import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared/date.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  mockedDateArray: Date[];
  cols: any[];
  rawData: any[];

  constructor(private dateService: DateService) { }

  ngOnInit() {

    
    this.rawData = this.dateService.getRowData(this.mockedDateArray);

    this.cols = [
      { field: 'deviceId', header: 'DeviceId' },
      { field: 'dataTypeId', header: 'DataTypeId' },
      { field: 'value', header: 'Value' },
      { field: 'time', header: 'Time' }
    ];

    console.log(this.rawData);
  }

}
