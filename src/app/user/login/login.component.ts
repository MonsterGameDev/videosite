import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as userActions from './../+state/user.actions';
import { getAuth } from '../+state/user.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(private router: Router,
              private store: Store<any>,
              private fb: FormBuilder ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(getAuth));
this.isLoggedIn$.subscribe(val => console.log('val', val));
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
      this.router.navigate(['/user', {outlets: {sub: ['profile']}}]);
    }
  }

}
