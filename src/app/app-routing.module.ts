import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven-form/template-driven/template-driven.component';
import { WelcomeComponent } from './welcome-module/welcome/welcome.component';
import { ReactiveDrivenComponent } from './reactive-driven-form/reactive-driven/reactive-driven.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveDrivenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
