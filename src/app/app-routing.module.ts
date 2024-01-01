import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAnalytics } from './pages/data-analytics/data-analytics.component';
import { AppHome } from './pages/home/app.home.component';
import { CloudAndInfrastructure } from './pages/cloud-and-infrastructure/cloud-and-infrastructure';

const routes: Routes = [
  {
    path:'data_analytics',
    component: DataAnalytics
  },
  {
    path:'cloud_and_infra',
    component: CloudAndInfrastructure
  },
  {
    path:'**',
    component: AppHome
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
