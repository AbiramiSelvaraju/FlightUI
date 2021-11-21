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
        localStorage.setItem('token', result['token']);
          if(result.token!=null){
              // console.log(result); 
              let jwtData = result.token.split('.')[1];
              let decodedJwtJsonData = JSON.parse(window.atob(jwtData));
              // console.log('jwtData: ' + decodedJwtJsonData.role);
              if(decodedJwtJsonData.role=="ROLE_USER"){
                this.route.navigate(['/flight']);
              }
              else if(decodedJwtJsonData.role=="ROLE_ADMIN"){
                this.route.navigate(['/airline']);
              }
          }
          else{
            // console.log('Failure');
            alert(this.errormsg);
          }
        })
    }
  }

}
