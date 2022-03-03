import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { ReportComponent } from './report/report.component';
import { LogComponent } from './log/log.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: '', children: [
//     { path: 'home', component: HomeComponent }
//   ] }
// ];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppRoutingModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    UserComponent,
    TaskComponent,
    LogComponent,
    ReportComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
