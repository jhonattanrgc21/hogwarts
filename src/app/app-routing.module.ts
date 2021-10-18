import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StaffComponent } from './components/staff/staff.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'staffs',
    component: StaffComponent
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
