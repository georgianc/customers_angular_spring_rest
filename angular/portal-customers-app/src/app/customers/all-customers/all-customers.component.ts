import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../shared/model/customer.model';
import { CustomerService } from '../shared/service/customer.service';

@Component({
    selector: 'app-all-customers',
    templateUrl: './all-customers.component.html',
    styleUrls: ['./all-customers.component.css']
})

export class AllCustomersComponent implements OnInit {

    customers: Customer[];

    constructor(private router: Router, private customerService: CustomerService) {

    }

    ngOnInit() {
        this.customerService.getCustomers()
            .subscribe(data => {
                console.log(data);
                this.customers = data;
            });
    }

    deleteCustomerById(id: string, index: number) {

        this.customerService.deleteCustomerById(id);
        this.customers.splice(index, 1);
    }
}
