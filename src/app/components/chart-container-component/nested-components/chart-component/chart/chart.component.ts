import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { DateService } from 'src/app/shared/date.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @ViewChild('usageChart', {static: false}) chart: UIChart;

  data: any;
  options: any;

  constructor(private dateService: DateService) {
  }

  ngOnInit() {
    this.chartSetup();
  }

  onDateSubmittedWithRange(rangeDates: Date[]): void {
    const mapOFValues = this.dateService.getValuesWithRange(rangeDates);
    let numberOfArrayIndex = 0;

    this.dataSetCleaner();
    mapOFValues.forEach((value: string, key: string) => {
      this.data['labels'][numberOfArrayIndex] = key;
      this.data['datasets'][0]['data'][numberOfArrayIndex] = mapOFValues.get(key);
      numberOfArrayIndex++;
    });
    this.chart.refresh();
  }

  onDateSubmittedForDates(dates: Date[]): void {
    const mapOFValues = this.dateService.getValuesForDates(dates);
    let numberOfArrayIndex = 0;

    this.dataSetCleaner();
    mapOFValues.forEach((value: string, key: string) => {
      //exact date
      this.data['labels'][numberOfArrayIndex] = key;
      //exact value
      this.data['datasets'][0]['data'][numberOfArrayIndex] = mapOFValues.get(key);
      numberOfArrayIndex++;
    });
    this.chart.refresh();
  }

  onDateSubmittedWithDetails(): void {
    let numberOfArrayIndex = 0;

    this.dataSetCleaner();
    for(let i= 0; i< 24; i++){
      this.data['labels'][i] = i;
      this.data['datasets'][0]['data'][numberOfArrayIndex] = 100;
      numberOfArrayIndex++;
    }
    this.chart.refresh();
  }

  onDateCleaned(): void {
    this.dataSetCleaner();
    this.chart.refresh();
  }

  dataSetCleaner(): void {
    this.data['labels'] =[];
    this.data['datasets'][0]['data'] = [];
  }

  chartSetup(): void {
    this.data = {
      labels: [],
      datasets: [
          {
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              dataType: '%',
              data: []
          }
      ]
    };

    this.options = {
      title: {
        display: true,
        text: '% Usage',
        position: 'left'
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          display: true,
          scaleLabel: {
              show: true,
              labelString: 'Value'
          },
          ticks: {
            max : 100,
            beginAtZero: true
          }
        }]
      }
    };
  }
}
