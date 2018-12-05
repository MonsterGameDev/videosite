import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as userActions from './../+state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(private router: Router,
              private store: Store<any>,
              private fb: FormBuilder ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', []],
      password: ['', []]
    });
  }


  save(form) {
    const username: string = this.loginForm.value.username;
    const password: string = this.loginForm.value.password;

    if (username === 'Admin' && password === 'Admin') {
      console.log('starting login process');
      // Dispatch logged in til store
      this.store.dispatch (new userActions.LogIn());
      // navigate til profilsiden
      this.router.navigate(['user/profile']);
    }
  }

}
