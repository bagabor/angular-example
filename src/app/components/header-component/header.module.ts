import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { HeaderComponent } from './header/header.component';
import { HttpExampleComponent } from './http-example/http-example.component';

@NgModule({
  declarations: [HeaderComponent, HttpExampleComponent],
  imports: [
    CommonModule,
    MenuModule,
    TranslateModule,
    ButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
