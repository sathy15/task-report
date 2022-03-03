import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control';

  name = 'Angular';
  users = [];
  model = new User();
  editmodel = new User();

  @ViewChild('editTaskModal') editTaskModal;

  deleteid = 0;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.model.role = 'User';
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsersService().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }
  addUser() {
    if (!this.model.id) {
      this.userService.createUserService(this.model).subscribe((data) => {
        this.getAllUsers();
        this.model = new User();
        document.getElementById('addTaskModal').click();
      });
    } else {
      console.log(this.model);
      this.userService
        .updateUserService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllUsers();
          this.model = new User();
          document.getElementById('editTaskModal').click();
        });
    }
  }
  editUser(id) {
    alert(id);
    this.userService.getUserService(id).subscribe((data: any) => {
      this.model = data;
    });
  }

  // a(id1)
  deleteUser(id) {
    alert(id);
    this.deleteid = id;
  }
  remove() {
    this.userService.deleteUserService(this.deleteid).subscribe((data) => {
      this.getAllUsers();
      this.deleteid = 0;
      document.getElementById('deleteTaskModal').click();
    });
  }

  checkPasswords(f): boolean {
    this.isConfirmPasswordDirty = true;
    console.log(this.model);
    if (
      Object.keys(this.model).length !== 0 &&
      this.model.password === f.cpassword
    ) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
      return true;
    } else {
      this.passwordsMatching = false;
      // this.isConfirmPasswordDirty = false;
      this.confirmPasswordClass = 'form-control is-invalid';
      return false;
    }
  }
}
