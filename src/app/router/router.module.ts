import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserModule } from '../user/user.module';


export const ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'videos', loadChildren: './../video/video.module#VideoModule' },
  { path: 'blog', loadChildren: './../blog/blog.module#BlogModule' },
  { path: 'user', loadChildren: './../user/user.module#UserModule' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRouterModule {}

