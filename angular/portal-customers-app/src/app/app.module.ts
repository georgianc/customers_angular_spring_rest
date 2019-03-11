import { BrowserModule } from '@angular/platform-browser';

/*import { HttpModule } from '@angular/http';*/
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AllCustomersComponent } from './customers/all-customers/all-customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerService } from './customers/shared/service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AllCustomersComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
/*    HttpModule,*/
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
