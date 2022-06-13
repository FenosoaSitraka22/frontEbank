import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/Customer.model';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {
  customer! : Customer;
  constructor(private customerService : CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.handelGetCustomer();
  }
  handelGetCustomer(){
    let params = this.route.snapshot.params['customerId'];
    console.log(params+"++++++++++++++++")
    this.customerService.getCustomer(Number(params)).subscribe({
      next: data=>{
        this.customer = data
      }, error : err=>{
        console.log(err)
      }
    })
  }
}
