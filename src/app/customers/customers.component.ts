import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Customer } from '../model/Customer.model';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers! : Observable<Array<Customer>>;
  errorMessage! : string;
  formMod!: FormGroup; //ilaina rehefa aampiasa input get mila importer ao amle appmodul FormGroupModule
  
  constructor(private customerService: CustomersService,
    private formBuilder : FormBuilder, private route : Router) {
    
   }

  ngOnInit(): void {
    //data binding formbuider declarer dans constructor
    this.formMod = this.formBuilder.group({
      keyWord : this.formBuilder.control(null) 
    });
   this.getCustomers();
      
  }
  getCustomers(){
    this.customers= this.customerService.getCustomers().pipe(
      catchError( err=>{
        this.errorMessage=err.errorMessage;
        return throwError(err); 
      })
    )
  }
  findCustomers(){
    let keyWord = this.formMod.value.keyWord;
    this.customers =this.customerService.findCustomerByName(keyWord)
  }
  handleDeletCustomer(c :Customer){
    confirm("Are you sure to remove " + c.name)
    this.customerService.deleteCustomer(c.id).subscribe({
      next: (ppp) =>{
          this.customers= this.customers.pipe(
            map(data=>{
              let index = data.indexOf(c);
              data.slice(index,1);
              return data;
            }
          )
          );
          
      },
      error: (err) =>{
        console.error(err);
        
      }
    })
  }
  handleCustomer(customerId:number){
    this.route.navigateByUrl("/customers/"+customerId);// mandefa path variable
  }

}
