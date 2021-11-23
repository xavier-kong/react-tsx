export interface Address {
    street: string,
    code: string
  }
  
export interface User {
    name: string,
    age: number,
    county: string,
    address: Address,
    admin: boolean
  }