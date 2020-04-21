import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCustomersComponent } from './customers/all-customers/all-customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: AllCustomersComponent },
  { path: 'customers/all', component: AllCustomersComponent },
  { path: 'customers/new', component: AddCustomerComponent },
  { path: 'customers/delete/id', component: AllCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
