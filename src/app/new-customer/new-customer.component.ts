import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  customerFormGroup!: FormGroup;
  constructor(private customerService : CustomersService,
    private newformBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.customerFormGroup = this.newformBuilder.group({
      name : this.newformBuilder.control(null,[Validators.required,Validators.min(3)]),
      email : this.newformBuilder.control(null,[Validators.required,Validators.email]) 
    });
  }
  saveCustomer(){
    let customer =this.customerService.saveCustomer(this.customerFormGroup.value).subscribe({
      next: (data)=>{
        alert("customer saved!");
        this.router.navigateByUrl("/customers");
      }, 
      error : err =>{
        console.log(err)
      }
    })
  }
}
