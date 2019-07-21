import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Calendar } from 'primeng/calendar';
import { dateRequireValidator } from 'src/app/shared/validation.directive';

@Component({
  selector: 'app-date-side-bar',
  templateUrl: './date-side-bar.component.html',
  styleUrls: ['./date-side-bar.component.scss']
})
export class DateSideBarComponent implements OnInit {

  @ViewChild('rangeCalendarInput', { static: false }) rangeCalendar: Calendar;
  @ViewChild('multipleCalendarInput', { static: false }) multipleCalendar: Calendar;

  @Output() dateSubmitterWithRange: EventEmitter<object> = new EventEmitter<object>();
  @Output() dateSubmitterWithMultipleDates: EventEmitter<object> = new EventEmitter<object>();
  @Output() dateSubmitterWithDetails: EventEmitter<object> = new EventEmitter<object>();
  @Output() dateCleaner: EventEmitter<object> = new EventEmitter<object>();


  calendarForm: FormGroup;

  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {
    this.calendarForm = this.fb.group({
      multipleCalendarComponent: [''],
      rangeCalendarComponent: ['']
    }, { validators: dateRequireValidator });
  }

  onClear(): void {
    this.calendarCleaner(this.rangeCalendar);
    this.calendarCleaner(this.multipleCalendar);
    this.dateCleaner.emit();
    this.calendarForm.setValue({
      multipleCalendarComponent: '',
      rangeCalendarComponent: ''
    });
  }

  onSubmit(): void {
    const multipleValues = this.calendarForm.get('multipleCalendarComponent').value as Array<object>;
    const rangeValues = this.calendarForm.get('rangeCalendarComponent').value as Array<object>;

    //This solution is just for demo purposes
    if (rangeValues !== undefined && rangeValues.length > 0) {
      this.dateSubmitterWithRange.emit(rangeValues);
    } else {
      this.dateSubmitterWithMultipleDates.emit(multipleValues);
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

  onDetails(): void {
    const multipleValues = this.calendarForm.get('multipleCalendarComponent').value as Array<object>;
    const rangeValues = this.calendarForm.get('rangeCalendarComponent').value as Array<object>;
    
    if (rangeValues !== undefined && rangeValues[1] === null) {
      this.dateSubmitterWithDetails.emit(rangeValues);
    } else if (multipleValues !== undefined && multipleValues.length == 1) {
      this.dateSubmitterWithDetails.emit(multipleValues);
    }    
  }

  calendarCleaner(calendar: Calendar): void {
    calendar.value = null;
    calendar.updateInputfield();
  }

  detailsButtonHandler(): boolean {
    const multipleValues = this.calendarForm.get('multipleCalendarComponent').value as Array<object>;
    const rangeValues = this.calendarForm.get('rangeCalendarComponent').value as Array<object>;

    if (rangeValues !== undefined && rangeValues[1] === null) {
      return true;
    } else if (multipleValues !== undefined && multipleValues.length == 1) {
      return true;
    }
    return false;
  }
}