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
import { AuthService } from './service/auth-service/auth.service';
import { FormsModule } from '@angular/forms'; 
import { CookieService } from 'ngx-cookie-service';
import { NgChartsModule } from 'ng2-charts';
import { SplashComponent } from './service/splash-service/splash/splash.component';
import { ForgotPageComponent } from './container/signin-page/component/forgot-page/forgot-page.component'; // นำเข้า ChartsModule

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
    StatusPageComponent,
    SplashComponent,
    ForgotPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [WorkDatabaseService,AuthService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
