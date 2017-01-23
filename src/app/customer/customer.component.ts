import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Customer } from './customer'
@Component({
    moduleId: module.id.toString(),
    selector: 'my-signup',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(true)
        });
    }

    customerForm: FormGroup;
    customer: Customer = new Customer();

}