import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/+state/app-state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUser from './../+state/user.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromUser.UserState>) { }

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select(fromUser.getAuth));
  }

}
