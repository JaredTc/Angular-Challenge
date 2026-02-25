import {HeaderUser, UserModel, UserViewModel} from '../features/user-component/models/user.model';

export class Helper{
 static generateHeaders(data: UserViewModel[]): HeaderUser[] {
    if (!data.length) return [];

    return Object.keys(data[0]).map(key => ({
      name: this.formatHeader(key),
      prop: key as keyof UserViewModel
    }));
  }

 static mapToViewModel(users: UserModel[]): UserViewModel[] {
    return users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      companyName: user.company.name
    }));
  }

 static formatHeader(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }

  static getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  }
}
