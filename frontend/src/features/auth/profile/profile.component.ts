import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector:'app-profile',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./profile.component.html',
  styleUrl:'./profile.component.css'
})
export class ProfileComponent implements OnInit{

  private authService=inject(AuthService);

  profile:any;

  ngOnInit():void{

      this.loadProfile();

  }

  loadProfile(){

      this.authService
      .getProfile()
      .subscribe({

          next:(response:any)=>{
            console.log("response..",response)
              this.profile=response.data;

          },

          error:(error)=>{

              console.log(error);

          }

      });

  }

}