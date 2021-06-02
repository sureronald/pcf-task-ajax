import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  getCustomers(): void {
    this.customerService.getCustomers()
        .subscribe(customers => this.customers = customers);
  }

  addCustomerEv(customer: Customer){
    this.customers.push(customer);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}
