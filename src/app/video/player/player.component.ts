import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from '../models/video.interface';
import { Observable } from 'rxjs';
import * as fromVideoCourses from './../+state/video.reducer';
import * as videoCourseActions from './../+state/video.actions';
import { Store, select } from '@ngrx/store';
import { first } from 'rxjs/operators';


declare let amp: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {
  currentVideoCourse: Video;
  myPlayer: any;


  constructor(private store: Store<fromVideoCourses.AppState>) { }

  ngOnInit() {
    const defaultVideoUrl = 'https://phng-euwe.streaming.media.azure.net/8ff29594-b3f8-4d32-ae00-1912f90ae6a1/20171001_155244.ism/manifest';
    const playerOptions = {
      'nativeControlsForTouch': false,
      controls: true,
      autoplay: false,
      width: '100%',
      height: 'auto',
      logo: { enabled: false },
      playbackSpeed: {
        enabled: true,
        initialSpeed: 1.0,
        speedLevels: [
            { name: 'x4.0', value: 4.0 },
            { name: 'x3.0', value: 3.0 },
            { name: 'x2.0', value: 2.0 },
            { name: 'x1.75', value: 1.75 },
            { name: 'x1.5', value: 1.5 },
            { name: 'x1.25', value: 1.25 },
            { name: 'normal', value: 1.0 },
            { name: 'x0.75', value: 0.75 },
            { name: 'x0.5', value: 0.5 },
        ]
      }
    };

    this.store.pipe(select(fromVideoCourses.getCurrentVideoCourse), first()).subscribe(
      (data: Video) => {
         // console.log('selector sending:', data);
        if (data) {
          this.readyPlayer(data.videoUrl, playerOptions);
          this.currentVideoCourse = data;
        } else {
          this.readyPlayer(defaultVideoUrl, playerOptions);
        }
      }
    );

  } // End OnInit

  ngOnDestroy() {
    // autistic precaution
    if (!!this.myPlayer) {
      this.myPlayer.dispose();
    }
  }

  private readyPlayer(url: string, options: Object) {
    url = url.replace('http://', 'https://');
    this.myPlayer = amp('azuremediaplayer', options);
    this.myPlayer.src([
      {
        'src': url,
        'type': 'application/vnd.ms-sstr+xml'
      }
    ]);
  }
}
