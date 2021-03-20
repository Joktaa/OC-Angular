import { Subject } from "rxjs";
import { User } from "../models/user.model";

export class UserService {
  private users: User[] = [
    {
      firstName: 'Charles',
      lastName: 'De Gaule',
      email: 'charles@degaule.com',
      OSPreference: 'Arch',
      hobbies: ['Gouverner la France', 'Ecrire la Vème république']
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
