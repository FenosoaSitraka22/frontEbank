import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from '../model/Account.model';
import { Operation, TransfertDTO } from '../model/Operation.model';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts!: Observable<Account>;
  accountformGroup!: FormGroup;
  operationFormGroup!: FormGroup;
  pageCurrent: number=0;
  size : number=5;
  
  constructor(private accountService :AccountsService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.accountformGroup = this.formBuilder.group({
      accountId: this.formBuilder.control(null)
    });
    this.operationFormGroup = this.formBuilder.group({
      operationType: this.formBuilder.control(null) ,
      accountIdDestination:this.formBuilder.control(null),
      amount:this.formBuilder.control(0),
      description: this.formBuilder.control(null)
    })
    // this.accountService.getAccounts().subscribe(
    //   {
    //     next:(data)=>{
    //       this.accounts =data;
    //     }
    //   }
    // )
  }
  getAccountOperation(){
   /// let params =this.route.snapshot.paramMap;
    // console.log(params.get('idAccount'))
    this.accounts=this.accountService.findAccount(this.accountformGroup.value.accountId, this.pageCurrent,this.size)
    // .subscribe({
    //   next: data=>{
    //     this.accounts= data;
    //   }
    // })
  }
  goToPage(page: number){
    this.pageCurrent = page;
    this.getAccountOperation();
  }
  handleOperation(accountIdfromView:string){
   // console.log("****************0"+this.operationFormGroup.value.operationType)
   let type: string=this.operationFormGroup.value.operationType;
   if(type=="DEBIT"||type=="CREDIT"){
      let operation : Operation = { accountId : accountIdfromView,
        amount: this.operationFormGroup.value.amount,
        description:this.operationFormGroup.value.description}
        this.accountService.saveOperation(operation,type).subscribe({
          next : data=>{
            alert(type+" successfull")
            this.getAccountOperation()
            this.operationFormGroup.reset()
          }, error: err=>{
            console.log(err)
          }
        }
        )
    } else {
      let transfert : TransfertDTO ={accountIdSource : this.accountformGroup.value.accountId,
        accountIdDestination: this.operationFormGroup.value.accountIdDestination,
        amount:this.operationFormGroup.value.amount,
        description:this.operationFormGroup.value.description
      }
      this.accountService.saveTransfert(transfert).subscribe({
        next : data =>{
          alert(type+" successfull")
          this.getAccountOperation()
          this.operationFormGroup.reset()
        }, error: err=>{
          console.log(err)
        }
      })
    }
  }
}
