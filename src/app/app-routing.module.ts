import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome-component/welcome/welcome.component';
import { TemplateDrivenComponent } from './components/template-driven-form-component/template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './components/reactive-driven-form-component/reactive-driven/reactive-driven.component';
import { HttpExampleComponent } from './components/http-example-component/http-example/http-example.component';
import { ChartComponent } from './components/chart-component/chart/chart.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveDrivenComponent },
  { path: 'httpExample', component: HttpExampleComponent },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
