import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DateSideBarComponent } from './date-side-bar/date-side-bar.component';

@NgModule({
  declarations: [DateSideBarComponent],
  imports: [
    CommonModule,
    CalendarModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    DateSideBarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ConfirmationService]
})
export class DateSideBarModule { }
