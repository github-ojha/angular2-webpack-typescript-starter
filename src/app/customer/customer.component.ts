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

        // set values initially - need to set all formcontrol values 
        this.customerForm.setValue({
            firstName : "Neeraj",
            lastName : "Ojha",
            email: 'nkojha@gmail.com',
            sendCatalog: false
        })
        //only few FormControl values can be set by patchValue 
        this.customerForm.patchValue({email:"neeraj.ojha@yahoo.com"});
    }

    customerForm: FormGroup;
    customer: Customer = new Customer();

}