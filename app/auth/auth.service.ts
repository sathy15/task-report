import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service';
import { Loginuser } from './loginuser';
import { User } from './user';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  userData: any;
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private userService: UserService) {}

  login(user: Loginuser) {
    // call userService here

    let uname = user.userName;
    let pass = user.password;

    var useritem = {
      id: 0,
      name: uname,
      password: pass,
      role: '',
      userid: '',
      email: '',
    };

    this.userService.validate(useritem).subscribe((data) => {
      this.userData = data;
    
    console.log("Auth service, this.userData "+this.userData);
    if (this.userData.length != 0) {
      // console.log(this.userData[0].name);
      localStorage.setItem('wsuser', this.userData[0].name);
      // this.getlocalstoarage();
      // this.loginShow = this.authService.isLoggedIn();
      // this.router.navigate(['dashboard']);
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    } else {
      localStorage.setItem('wsuser', 'null');
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    }
  });
    // if (user.userName !== '' && user.password !== '') {
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/home']);
    // }
  }

  logout() {
    localStorage.setItem('wsuser', 'null');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
