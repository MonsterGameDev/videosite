import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video.interface';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() course: Video;
  constructor() { }

  ngOnInit() {
    console.log('Course: ', this.course);
  }

}
