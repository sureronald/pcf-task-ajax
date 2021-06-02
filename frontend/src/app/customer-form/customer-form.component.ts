import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Output() newCustomerEvent = new EventEmitter<Customer>();
  sub_options = ['free', 'plus', 'pro']; // using static options for now but this is better fetched from db

  constructor(
    private customerService: CustomerService
  ) { }

  onSubmit(fm: NgForm){
    this.customerService.addCustomer(fm.value as Customer)
      .subscribe(customer => {
        console.log(customer);
        this.addCustomerEv(customer);
      });
    fm.reset();
  }

  addCustomerEv(customer: Customer){
    this.newCustomerEvent.emit(customer);
  }

  ngOnInit(): void {
  }

}
