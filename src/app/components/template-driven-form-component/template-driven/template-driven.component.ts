import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Hero } from './hero';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  power = ['Smart', 'Flexible', 'Hot', 'Changer'];
  heroModel = new Hero(18, 'Dr IQ', this.power[0], 'Chuck');

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) {
  }

  onSubmit(): void {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Saved Hero' });
  }

  onCancel() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to leave this page?',
      accept: () => {
        this.router.navigateByUrl('');
      }
    });
  }

}
