import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './user/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginRegistrationComponent } from './auth/userAuth/user-login-registration/user-login-registration.component';
import { AdminLoginRegistrationComponent } from './auth/AdminAuth/admin-login-registration/admin-login-registration.component';
import { WhoLoginRegistrationComponent } from './auth/WhoAuth/who-login-registration/who-login-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { WhoRegistrationComponent } from './auth/WhoAuth/who-registration/who-registration.component';
import { DatePipe } from '@angular/common';
import { WhoDashboardComponent } from './who/who-dashboard/who-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginRegistrationComponent,
    AdminLoginRegistrationComponent,
    WhoLoginRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminDashboardComponent,
    WhoRegistrationComponent,
    WhoDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,  // Add this module for animations
    ToastrModule.forRoot({
      timeOut: 3000,               // Default duration of the toast
      positionClass: 'toast-top-right', // Default position
      preventDuplicates: true,     // Prevent duplicate toasts
      closeButton: true,           // Show a close button
      progressBar: true,           // Show a progress bar
      progressAnimation: 'increasing', // Progress animation type
      easeTime: 1000,              // Ease transition time
      newestOnTop: true     
    })  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
