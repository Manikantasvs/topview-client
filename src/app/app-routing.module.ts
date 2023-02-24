import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBodyComponent } from './login/login-body/login-body.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupBodyComponent } from './signup/signup-body/signup-body.component';

const routes: Routes = [
  {path: 'login', component: LoginBodyComponent},
  {path: 'signup', component: SignupBodyComponent},
  {path: '', component: LandingHeaderComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
