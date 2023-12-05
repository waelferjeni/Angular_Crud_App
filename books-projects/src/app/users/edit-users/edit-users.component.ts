import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : UserService,
    private formBuilder : FormBuilder,
    private router : Router){}

  user? : User;
  //Reactive Form
  editForm = this.formBuilder.group({
    name : '',
    password : '',
    email : ''
  });


  editUser = ()=>{
    
    const values = this.editForm.value;
    console.log(values)
    this.service.editUser(
      new User(this.user!.id, values.name!, values.email!, values.password!)
      
    ).subscribe(
      user => this.router.navigate(['/users'])
       
    );
     
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        //this.user = this.service.getUserById(+params['id']);
        this.service.getUserById(+params['id']).subscribe(
          user=> {
            this.user = user;

            console.log(this.user);
            this.editForm.setValue({
              name : this.user.name,
              password : this.user.password,
              email : this.user.email 
            })
            
          }
        )
      }
    )

  }


}
