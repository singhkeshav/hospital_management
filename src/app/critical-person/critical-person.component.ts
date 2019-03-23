import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-critical-person',
  templateUrl: './critical-person.component.html',
  styleUrls: ['./critical-person.component.css']
})
export class CriticalPersonComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  
  redirect(){
    this.router.navigateByUrl('/chat')
  }

}
