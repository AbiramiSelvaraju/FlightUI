import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalhostService } from '../localhost.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  errormsg:String="Oops! Invalid Credentials!";

  constructor(private service: LocalhostService, private route: Router) { }

  ngOnInit(): void {
    this.initForm();
    localStorage.clear();
   }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loginProcess(){
    if(this.formGroup.valid){
        this.service.login(this.formGroup.value).subscribe(result=>{
        this.service.setToken(result['token']);
        this.service.setRole(result['role']);
          if(result.token!=null){
                if(this.service.isUserLoggedIn()){
                this.route.navigate(['/flightSearch']);
              }
              else if(this.service.isAdminLoggedIn()){
                this.route.navigate(['/airline']);
              }
          }
          else{
            alert(this.errormsg);
          }
        })
    }
  }

}
