import { BrowserModule } from '@angular/platform-browser';

/*import { HttpModule } from '@angular/http';*/
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCustomersComponent } from './customers/all-customers/all-customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerService } from './customers/shared/service/customer.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCustomersComponent,
    AddCustomerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
/*    HttpModule,*/
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
