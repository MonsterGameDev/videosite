import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { VideoHomeComponent } from './video-home/video-home.component';

@NgModule({
  declarations: [PlayerComponent, VideoHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'player', component: PlayerComponent },
      { path: '', component: VideoHomeComponent },
    ])
  ]
})
export class VideoModule { }
