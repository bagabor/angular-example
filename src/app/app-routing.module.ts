import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartContainerComponent } from './components/chart-container-component/chart-container/chart-container.component';
import { HttpExampleComponent } from './components/http-example-component/http-example/http-example.component';
import { ReactiveDrivenComponent } from './components/reactive-driven-form-component/reactive-driven/reactive-driven.component';
import { TemplateDrivenComponent } from './components/template-driven-form-component/template-driven/template-driven.component';
import { WelcomeComponent } from './components/welcome-component/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveDrivenComponent },
  { path: 'httpExample', component: HttpExampleComponent },
  { path: 'chart', component: ChartContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
