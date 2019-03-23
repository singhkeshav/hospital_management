import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public router:Router) { }
  model: any = []
  ngOnInit() {
  }

  onSubmit() {
    this.redirect()
  }
 
  redirect(){
    window.location.href="/result"
    //this.router.navigateByUrl("/result")
  }
}
