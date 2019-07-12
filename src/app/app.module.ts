import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header-component/header.module';
import { ReactiveDrivenFormModule } from './components/reactive-driven-form-component/reactive-driven-form.module';
import { TemplateDrivenFormModule } from './components/template-driven-form-component/template-driven-form-modul';
import { WelcomeModuleModule } from './components/welcome-component/welcome-module.module';
import { HttpExampleModule } from './components/http-example-component/http-example.module';

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
    HttpExampleModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
