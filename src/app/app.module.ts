import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { LoginBodyComponent } from './login/login-body/login-body.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupBodyComponent } from './signup/signup-body/signup-body.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHeaderComponent,
    LoginBodyComponent,
    PageNotFoundComponent,
    SignupBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
