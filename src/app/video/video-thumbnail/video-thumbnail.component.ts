import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video.interface';
import { faPlayCircle, faFileArchive, faArrowAltCircleDown, faFileDownload, faInfoCircle  } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit() {
    console.log('Course: ', this.course);
  }

}
