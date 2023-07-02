import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './container/signin-page/signin-page.component';
import { AppComponent } from './app.component';
import { StartPageComponent } from './container/start-page/start-page.component';
import { LandingPageComponent } from './container/landing-page/landing-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/signin-page', pathMatch: 'full' },  
  { path: 'signin-page', component: SigninPageComponent },
  { path: 'start', component: StartPageComponent },
  { path: 'landing', component: LandingPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
