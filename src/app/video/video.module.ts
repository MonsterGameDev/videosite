import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { VideoHomeComponent } from './video-home/video-home.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { videoReducer } from './+state/video.reducer';
import { VideoCourseEffectsService } from './+state/video.effects';
import { VideoService } from './common/video.service';
import { CreateVideoCourseComponent } from './create-video-course/create-video-course.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlayerComponent,
    VideoHomeComponent,
    VideolistComponent,
    VideoThumbnailComponent,
    CreateVideoCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'player', component: PlayerComponent, outlet: 'sub' },
      { path: 'list', component: VideolistComponent, outlet: 'sub' },
      { path: 'create', component: CreateVideoCourseComponent, outlet: 'sub' },
      { path: '', component: VideoHomeComponent },
    ]),
    StoreModule.forFeature('videoCourses', videoReducer),
    EffectsModule.forFeature([VideoCourseEffectsService]),
    ReactiveFormsModule
  ],
  providers: [VideoService]
})
export class VideoModule { }
