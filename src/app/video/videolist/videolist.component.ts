import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video.interface';
import { Store, select } from '@ngrx/store';
import * as fromVideoCourses from './../+state/video.reducer';
import * as videoCourseActions from './../+state/video.actions';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {
  videoCourses$: Observable<Video[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromVideoCourses.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new videoCourseActions.LoadVideoCourses());
    this.videoCourses$ = this.store.pipe(select(fromVideoCourses.getVideoCourses));
    this.error$ = this.store.pipe(select(videoCourseActions.LoadVideoCoursesFail));
  }

}
