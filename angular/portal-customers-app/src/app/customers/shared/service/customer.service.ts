import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    })
};

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    /*    private customerUrl = '/api';*/
    private customerUrl = 'http://localhost:8080/customers/all';

    /*  // Error in all-customers.component.ts: The 'Object' type is assignable to very few other types.
        // Did you mean to use the 'any' type instead?
        getCustomers() {
            console.log(this.customerUrl);
            return this.http.get(this.customerUrl, httpOptions);
        }
    */

    getCustomers(): Observable<any> {
        console.log(this.customerUrl);
        return this.http.get(this.customerUrl, httpOptions);
    }

    /*
    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customerUrl, httpOptions).pipe(
            map(customers => customers.map(customer => {
                // console.log(customer);
                return {
                    id: customer.id,
                    name: customer.name,
                    email: customer.email,
                    address: customer.address
                };
            })),
        );
    }
    */
}
