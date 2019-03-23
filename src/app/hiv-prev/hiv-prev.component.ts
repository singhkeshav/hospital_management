import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hiv-prev',
  templateUrl: './hiv-prev.component.html',
  styleUrls: ['./hiv-prev.component.css']
})
export class HivPrevComponent implements OnInit {

 
  constructor( public router:Router) { }
  model:any = []
  ngOnInit() {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  
  redirect(){
    window.location.href="/result"
  //this.router.navigateByUrl("/result")
  }
}
