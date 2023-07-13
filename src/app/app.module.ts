import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingServiceComponent } from './service/loading-service/loading-service.component';
import { SigninPageComponent } from './container/signin-page/signin-page.component';
import { StartPageComponent } from './container/start-page/start-page.component';
import { LandingPageComponent } from './container/landing-page/landing-page.component';
import { MainPageComponent } from './container/landing-page/component/main-page/main-page.component';
import { StatusPageComponent } from './container/landing-page/component/status-page/status-page.component';
import { HistoryPageComponent } from './container/landing-page/component/history-page/history-page.component';
import { WorkDatabaseService } from './service/work-database.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { MainPageComponent } from './container/Landing-page/component/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingServiceComponent,
    SigninPageComponent,
    StartPageComponent,
    LandingPageComponent,
    MainPageComponent,
    HistoryPageComponent,
    StatusPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [WorkDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
