import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children : [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table',
        component: AdminTableComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
