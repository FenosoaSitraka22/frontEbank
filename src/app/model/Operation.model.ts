export interface Operation{
    accountId:string,
    amount: number,
    description:string
}
export interface DebitDTO{
    accountId:string,
    amount: number,
    description:string
}
export interface TransfertDTO{
    accountIdSource: string,
    accountIdDestination:string,
    amount:number,
    description:string
}