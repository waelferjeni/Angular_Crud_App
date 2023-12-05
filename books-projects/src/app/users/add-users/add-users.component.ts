import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  constructor(
    private service : UserService,
    private router : Router
    ){}


  addUser = (f : NgForm)=>{
    //console.log(f);
    const newUser = {
      name: f.value.name,
      password : f.value.password,
      email : f.value.email
     }
     console.log(newUser);
    this.service.addUser(newUser).subscribe(
      user => this.router.navigate(['/users'])
    );


  }
}
