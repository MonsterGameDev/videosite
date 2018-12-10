import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-home-text',
  templateUrl: './video-home-text.component.html',
  styleUrls: ['./video-home-text.component.css']
})
export class VideoHomeTextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seDemo() {
    this.router.navigate(['/videos', {outlets: {sub: ['player']}}]);
  }
}
