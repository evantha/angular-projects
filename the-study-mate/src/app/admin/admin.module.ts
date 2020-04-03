import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SliderComponent } from './components/admin-dashboard/slider/slider.component';
import { ContactComponent } from './components/admin-dashboard/contact/contact.component';
import { RouterModule } from '@angular/router';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: SliderComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  declarations: [AdminDashboardComponent, SliderComponent, ContactComponent],
  imports: [CommonModule, RouterModule.forChild(ADMIN_ROUTES)],
  exports: [AdminDashboardComponent]
})
export class AdminModule { }
