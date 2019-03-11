import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../shared/model/customer.model';
import { CustomerService } from '../shared/service/customer.service';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

    constructor(private router: Router, private customerService: CustomerService) {

    }

    customer: Customer = new Customer();

    createCustomer(): void {
        this.customerService.createCustomer(this.customer)
            .subscribe(data => {
                alert('Customer created successfully.');
            });

    }
}
