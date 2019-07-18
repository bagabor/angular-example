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

  @ViewChild('calendarInput', {static: false}) calendar: Calendar;

  @Output() dateSubmitter: EventEmitter<object> = new EventEmitter<object>();
  @Output() dateCleaner: EventEmitter<object> = new EventEmitter<object>();
  rangeDates: Date[];

  constructor(private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {
  }

  onClear(): void {
    this.calendar.value = null;
    this.calendar.updateInputfield();
    this.dateCleaner.emit();
  }

  onSubmit(): void {
    this.dateSubmitter.emit(this.rangeDates);
  }

  onBack(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to leave this page?',
      accept: () => {
        this.router.navigateByUrl('');
      }
    });
  }
}
