export interface Account {
    accountId: string;
    balance: number;
    currentPage: number;
    totalPage: number;
    pageSize: number;
    accountOperationDTOS: AccountOperationDtos[];
  }
  
  export interface AccountOperationDtos {
    id: number;
    operationDate: Date;
    amount: number;
    type: string;
    description: string;
  }
  