import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './container/signin-page/signin-page.component';
import { AppComponent } from './app.component';
import { StartPageComponent } from './container/start-page/start-page.component';
import { LandingPageComponent } from './container/landing-page/landing-page.component';
import { SplashComponent } from './service/splash-service/splash/splash.component';
import { ForgotPageComponent } from './container/signin-page/component/forgot-page/forgot-page.component';
import { StatusPageComponent } from './container/landing-page/component/vital-sign-page/status-page/status-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/start', pathMatch: 'full' },  
  { path: 'signin-page', component: SigninPageComponent },
  // { path: 'forgot-page', component: ForgotPageComponent },
  { path: 'start', component: StartPageComponent },
  { path: 'landing', component: LandingPageComponent },
  // { path: 'landing', component: LandingPageComponent }
  // { path: 'heart-rate', component: StatusPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
