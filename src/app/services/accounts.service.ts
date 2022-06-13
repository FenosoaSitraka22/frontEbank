import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../model/Account.model';
import { DebitDTO, Operation, TransfertDTO } from '../model/Operation.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
   
  constructor(private http: HttpClient) { }
  getAccounts():Observable<Account[]>{
    return this.http.get<Array<Account>>(environment.backEndPath+"/accounts")
  }
  findAccount(idAccount:string,page:number,size:number):Observable<Account>{
    return this.http.get<Account>(environment.backEndPath+"/accounts/"+idAccount+"/pageOperations?page="+page+"&size="+size);
  }
  public saveOperation(operation: Operation, type:string):Observable<Operation>{
   
    type = type.toLowerCase()+"Operations"
    console.log(type+'----------')
    return this.http.post<Operation>(environment.backEndPath+"/account/"+type,operation);
  }
  public saveDebit(debit: DebitDTO):Observable<DebitDTO>{
    return this.http.post<DebitDTO>(environment.backEndPath+"/account/debitOperations",debit)
  }
  saveTransfert(transfert: TransfertDTO):Observable<TransfertDTO> {
    return this.http.post<TransfertDTO>(environment.backEndPath+"/account/transfertOperations",transfert)
  }
}
