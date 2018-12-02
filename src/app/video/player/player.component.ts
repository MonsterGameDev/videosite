import { Component, OnInit } from '@angular/core';

declare let amp: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    const myOptions = {
      'nativeControlsForTouch': false,
      controls: true,
      autoplay: true,
      width: 'auto',
      height: '500',
      logo: { enabled: false },
      playbackSpeed: {
        enabled: true,
        initialSpeed: 1.0,
        speedLevels: [
            { name: 'x4.0', value: 4.0 },
            { name: 'x3.0', value: 3.0 },
            { name: 'x2.0', value: 2.0 },
            { name: 'x1.75', value: 1.75 },
            { name: 'x1.5', value: 1.5 },
            { name: 'x1.25', value: 1.25 },
            { name: 'normal', value: 1.0 },
            { name: 'x0.75', value: 0.75 },
            { name: 'x0.5', value: 0.5 },
        ]
    }
      };
    const myPlayer = amp('azuremediaplayer', myOptions);
    myPlayer.src([
            {
                    // tslint:disable-next-line:max-line-length
                    'src': 'https://phng-euwe.streaming.media.azure.net/13dfebdc-4a1e-4524-89c6-daeeab512240/20180428_130619.ism/manifest(format=mpd-time-csf)',
                    'type': 'application/vnd.ms-sstr+xml'
            }
    ]);
  }

}
