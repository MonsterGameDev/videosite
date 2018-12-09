import { Component, OnInit, HostListener } from '@angular/core';
import { faSearch, faVideo, faEdit, faSignInAlt, faSignOutAlt, faUser, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


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

  constructor() { }

  ngOnInit() {}

}
