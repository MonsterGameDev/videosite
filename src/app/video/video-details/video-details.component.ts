import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromVideo from './../+state/video.reducer';
import { Router, ActivatedRoute } from '@angular/router';
import * as videoActions from './../+state/video.actions';
import { Observable } from 'rxjs';
import { Video } from '../models/video.interface';
import { getAuth } from 'src/app/user/+state/user.reducer';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  currentVideoCourse$: Observable<Video>;
  currentVideoCourse: Video;
  auth$: Observable<boolean>;

  constructor(private store: Store<fromVideo.AppState>,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.auth$ = this.store.pipe(select(getAuth));
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.store.dispatch(new videoActions.SetCurrentVideoCourseId(+params['id']));
    });
    this.currentVideoCourse$ = this.store.pipe(select(fromVideo.getCurrentVideoCourse));
    this.currentVideoCourse$.subscribe(val => {
      if (val) {
        this.currentVideoCourse = val;
      } else {
        this.router.navigate([{outlets: {sub: ['list']}}]);
      }
    });
  }

  playVideoCourse() {
    this.router.navigate(['/videos', {outlets: {sub: ['player']}}]);
  }


  editVideoCourse (id: number) {

  }

  deleteVideoCourse(id: number) {
    if (confirm('Er du sikker? \n  Du er ved for alvor at slette en post fra databasen')) {}
    this.store.dispatch(new videoActions.DeleteVideoCourse(id));
    this.router.navigate(['/videos', {outlets: {sub: ['list']}}]);
  }
}

