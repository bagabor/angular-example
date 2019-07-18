import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-date-side-bar',
  templateUrl: './date-side-bar.component.html',
  styleUrls: ['./date-side-bar.component.scss']
})
export class DateSideBarComponent implements OnInit {

  @ViewChild('rangeCalendarInput', {static: false}) rangeCalendar: Calendar;
  @ViewChild('multipleCalendarInput', {static: false}) multipleCalendar: Calendar;  

  @Output() dateSubmitterWithRange: EventEmitter<object> = new EventEmitter<object>();
  @Output() dateSubmitterWithMultipleDates: EventEmitter<object> = new EventEmitter<object>();
  @Output() dateCleaner: EventEmitter<object> = new EventEmitter<object>();
  rangeDates: Date[];
  multipleDates: Date[];

  constructor(private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {
  }

  onClear(): void {
    this.calendarCleaner(this.rangeCalendar, this.rangeDates);
    this.calendarCleaner(this.multipleCalendar, this.multipleDates);
    this.dateCleaner.emit();    
  }

  onSubmit(): void {
    //This solution is just for demo purposes
    if(this.rangeDates !== undefined && this.rangeDates.length > 0) {
      this.dateSubmitterWithRange.emit(this.rangeDates);
    }else{
      this.dateSubmitterWithMultipleDates.emit(this.multipleDates);
    }
  }

  onBack(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to leave this page?',
      accept: () => {
        this.router.navigateByUrl('');
      }
    });
  }

  calendarArrayCleaner(array): void{
    if(array !== undefined && array !== null) {
      array.length = 0;
    }
  }

  calendarCleaner(calendar: Calendar, array: Date[]): void {
    calendar.value = null;
    calendar.updateInputfield();
    this.calendarArrayCleaner(array);
  }
}