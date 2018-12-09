import { Component, OnInit } from '@angular/core';
import { faShare, faShareAlt, faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class UserHomeComponent implements OnInit {
  faShare = faShare;
  faShareAlt = faShareAlt;
  faShareAltSquare = faShareAltSquare;

  constructor() { }

  ngOnInit() {
  }

}
