import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  custumers! : Array<Customer>
  constructor(private http:HttpClient) { }

  public getCustomers(): Observable<Array<Customer>>{
     return this.http.get<Array<Customer>>(environment.backEndPath +"/custumers");
  }
  public findCustomerByName(keyWord:string): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backEndPath+"/custumers/search"+keyWord);
  }
  public saveCustomer(customer : Customer): Observable<Customer>{
    return this.http.post<Customer>(environment.backEndPath+"/custumers",customer);
  }
  public deleteCustomer(id:number){
    return this.http.delete(environment.backEndPath+"/custumers/"+id);
  }
  public getCustomer(customerId:number):Observable<Customer>{
    return this.http.get<Customer>(environment.backEndPath+"/custumers/"+customerId);
  }
}
