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
    private newCustomerUrl = 'http://localhost:8080/customers/create';
    private deleteCustomerUrl = 'http://localhost:8080/customers/delete';

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

    public createCustomer(customer) {
        return this.http.post<Customer>(this.newCustomerUrl, customer, httpOptions);
    }

    public deleteCustomerById(id: string) {
        console.log(this.deleteCustomerUrl + '/id/' + id);
        // this.http.delete<Customer>(this.deleteCustomerUrl + '/id/' + id, httpOptions);

        // Always subscribe!
        // An HttpClient method does not begin its HTTP request until you call subscribe() on the observable
        // returned by that method. This is true for all HttpClient methods.
        // https://angular.io/guide/http#always-subscribe
        this.http.post<Customer>(this.deleteCustomerUrl + '/id/' + id, httpOptions).subscribe();
    }
}
