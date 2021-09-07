import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.isLoggedIn()) this.router.navigateByUrl('/home');
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/home')
    }, error => {
      console.error(error);
      this.toastr.error(error.error)
    })
  }

  isLoggedIn(){
    return this.accountService.currentUser$.subscribe(response=>{
      return !!response;
    })
  }
}
