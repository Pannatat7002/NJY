import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingServiceComponent } from './service/loading-service/loading-service.component';
import { SigninPageComponent } from './container/signin-page/signin-page.component';
import { StartPageComponent } from './container/start-page/start-page.component';
import { LandingPageComponent } from './container/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingServiceComponent,
    SigninPageComponent,
    StartPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
