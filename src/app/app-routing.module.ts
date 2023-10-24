import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAnalytics } from './pages/data-analytics/data-analytics.component';

const routes: Routes = [
  {
    path:'data_analytics',
    component: DataAnalytics
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
