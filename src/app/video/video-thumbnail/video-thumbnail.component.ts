import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video.interface';
import { faPlayCircle, faFileArchive, faArrowAltCircleDown, faFileDownload, faInfoCircle  } from '@fortawesome/free-solid-svg-icons';
import * as fromVideoCourses from './../+state/video.reducer';
import * as videoCourseActions from './../+state/video.actions';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() course: Video;

  faPlayCircle = faPlayCircle;
  faFileDownload = faFileDownload;
  faInfoCircle = faInfoCircle;



  constructor(private store: Store<fromVideoCourses.AppState>, private router: Router) { }

  ngOnInit() {
  }

  playVideo(id: number) {
    this.store.dispatch(new videoCourseActions.SetCurrentVideoCourseId(id));
    this.router.navigate(['/videos', {outlets: {sub: ['player']}}]);
  }

}
