import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartContainerModule } from './components/chart-container-component/chart-container.module';
import { HeaderModule } from './components/header-component/header.module';
import { HttpExampleModule } from './components/http-example-component/http-example.module';
import { ReactiveDrivenFormModule } from './components/reactive-driven-form-component/reactive-driven-form.module';
import { TemplateDrivenFormModule } from './components/template-driven-form-component/template-driven-form-modul';
import { WelcomeModuleModule } from './components/welcome-component/welcome-module.module';
import { InMemoryDataService } from './shared/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModuleModule,
    TemplateDrivenFormModule,
    ReactiveDrivenFormModule,
    HeaderModule,
    // MyChartModule,
    ChartContainerModule,
    HttpExampleModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      //passThruUnknownUrl: true is needed for localization
      InMemoryDataService, { passThruUnknownUrl: true })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
