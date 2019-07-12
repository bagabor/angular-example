import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ReactiveDrivenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    TranslateModule
  ],
  providers: [ConfirmationService]
})
export class ReactiveDrivenFormModule { }
