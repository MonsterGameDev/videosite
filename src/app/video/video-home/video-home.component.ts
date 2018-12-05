import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromVideo from './../+state/video.reducer';
import { Store, select } from '@ngrx/store';
import { getAuth } from 'src/app/user/+state/user.reducer';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css']
})
export class VideoHomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<fromVideo.AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(getAuth));
  }

}
