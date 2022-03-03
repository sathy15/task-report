import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { LogComponent } from './log/log.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'side', component: SidebarComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: AppComponent },
  { path: 'user', component: UserComponent },
  { path: 'task', component: TaskComponent },
  { path: 'log', component: LogComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
