import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, Subject, fromEvent } from 'rxjs';
import { TweenLite, TimelineLite } from 'gsap/all';
import { delay, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'coursesite';
  faBars = faBars;

 // sideBarExpand = new Subject<boolean>();
  tweenExpand: any;
  tweenCollapse: any;

  ngOnInit(): void {
    this.tweenExpand = TweenLite.to('#side-bar', .5, { left: 0, delay: 0, paused: true });
    this.tweenCollapse = TweenLite.to('#side-bar', .5, { left: -95, delay: 2, paused: true});

    // OnFirstLoad
    if (window.innerWidth <= 460) {
      const t1 = new TimelineLite();
      t1.to('#side-bar', .7, { left: 0, delay: 1 })
        .to('#side-bar', 1, { left: -95, delay: 2});
      } else {
      TweenLite.set('#side-bar', { left: 0});
    }

    // OnBurgerClick
    const burger = document.getElementById('hamburger');
    fromEvent(burger, 'click').subscribe((val: MouseEvent) => {
      const t1 = new TimelineLite();
      t1.to('#side-bar', .7, { left: 0, delay: .3 })
        .to('#side-bar', 1, { left: -95, delay: 2});
    });

    fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe((val: any) => {
      if (val.target.innerWidth <= 460) {
        TweenLite.to('#side-bar', .5, { left: -95, delay: 0.1 });
      } else {
        TweenLite.set('#side-bar', { left: 0});
      }

    });

  }

  ngOnDestroy(): void {}

}
