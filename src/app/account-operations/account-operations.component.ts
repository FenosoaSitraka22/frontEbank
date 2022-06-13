import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/Customer.model';
import { AccountOperationsService } from '../services/account-operations.service';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit {
  customer!: Customer;
  accountOperations : Array<any> |undefined;
  constructor(private accountOperationService: AccountOperationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    //this.getAccountOperation();
  }
  // getAccountOperation(){
  //   let params =this.route.snapshot.paramMap;
  //   console.log(params.get('idAccount'))
  //   this.accountOperationService.findAccountOperation(String(params.get('idAccount'))).subscribe({
  //     next: data=>{
  //       this.accountOperations = data;
  //       console.log(data[1].id)
  //     }
  //   })
  // }
  
}
