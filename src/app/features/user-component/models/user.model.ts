export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
export interface UserViewModel {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  companyName: string;
}

  export interface HeaderUser{
    name: string;
    prop: string;
  }
export interface TableUser {
  headers: HeaderUser[];
  data: UserModel[];
}
