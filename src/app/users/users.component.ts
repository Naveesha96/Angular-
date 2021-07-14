import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../User/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any[]=[]

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res => {
      this.users=res as any[];
      console.log(res);
    });
     
  } 

}
