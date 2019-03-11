import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCustomersComponent } from './customers/all-customers/all-customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/all', component: AllCustomersComponent },
  { path: 'customers/new', component: AddCustomerComponent },
  { path: 'customers/delete/id', component: AllCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
