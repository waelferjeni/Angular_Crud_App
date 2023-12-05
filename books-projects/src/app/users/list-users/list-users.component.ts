import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users? : User[];
  subscription? : Subscription;

  constructor (private service : UserService){}

  deleteUser = (id : number)=>{
    this.service.deleteUser(id).subscribe(
      obj=>this.users = this.users?.filter(
        user=>user.id !== id
      ),
      error=>console.log(error),
      ()=>console.log('terminé')
    )

  }
  ngOnInit(): void {
    //this.books = this.service.getBooks();
    this.service.getUsers().subscribe(   
      users => this.users = users
    );

  }


}
