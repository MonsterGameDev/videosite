import { Component, OnInit } from '@angular/core';
import { faSearch, faVideo, faEdit, faSignInAlt, faSignOutAlt, faUser, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TweenLite } from 'gsap/all';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faSearch = faSearch;
  faVideo = faVideo;
  faEdit = faEdit;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  tween1: any;
  tween2: any;
  tween3: any;

  expanded: boolean;

  constructor() { }

  ngOnInit() {
    this.expanded = false;

    this.tween1 = TweenLite.to('#side-bar', 1, {width: 250, delay: .2, paused: true});
    this.tween2 = TweenLite.to('#expand', 1, { rotation: '180', delay: .5, paused: true});
    this.tween3 = TweenLite.to('.side-bar-label', .5, {opacity: 1, delay: 1, paused: true});
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
    if (this.expanded === true) {
      this.tween1.restart(true);
      this.tween2.restart(true);
      this.tween3.restart(true);
    } else {
      this.tween1.reverse(true);
      this.tween2.reverse(true);
      this.tween3.reverse(true);
    }

  }

}
