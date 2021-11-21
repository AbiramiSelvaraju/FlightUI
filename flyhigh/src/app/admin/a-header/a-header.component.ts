import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.css']
})
export class AHeaderComponent {

  constructor(private route: Router) { }

   logout(){
    this.route.navigate(['']);
  }

}
