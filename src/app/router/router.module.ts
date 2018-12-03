import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginComponent } from '../user/login/login.component';
import { UserModule } from '../user/user.module';


export const ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'videos', loadChildren: './../video/video.module#VideoModule' },
  { path: 'blog', loadChildren: './../blog/blog.module#BlogModule' },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/login', component: LoginComponent},
  { path: 'user', pathMatch: 'full', redirectTo: '/user/profile'},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    UserModule,
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRouterModule {}

