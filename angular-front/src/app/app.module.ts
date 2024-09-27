import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
