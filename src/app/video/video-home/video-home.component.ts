import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromVideo from './../+state/video.reducer';
import { Store, select } from '@ngrx/store';
import { getAuth } from 'src/app/user/+state/user.reducer';
import { Router } from '@angular/router';
import { faShare, faShareAlt, faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css']
})
export class VideoHomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  faShare = faShare;
  faShareAlt = faShareAlt;
  faShareAltSquare = faShareAltSquare;

  constructor(private store: Store<fromVideo.AppState>, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(getAuth));
  }

}
