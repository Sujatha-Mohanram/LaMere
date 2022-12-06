export class User
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public displayName?: string,
    public email?: string,
    public password?: string,
    public userstatus?:string
    
  ){}
}