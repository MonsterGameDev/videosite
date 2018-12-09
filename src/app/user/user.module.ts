import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './+state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserHomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([]),
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent, outlet: 'sub' },
      { path: 'login', component: LoginComponent, outlet: 'sub' },
      { path: '', component: UserHomeComponent },
    ]),
    FontAwesomeModule
  ]
})
export class UserModule { }
