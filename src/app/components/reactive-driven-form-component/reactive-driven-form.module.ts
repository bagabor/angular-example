import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ReactiveDrivenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    TranslateModule,
    ToastModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class ReactiveDrivenFormModule { }
