import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, Subject, fromEvent } from 'rxjs';
import { TweenLite } from 'gsap/all';
import { delay, tap } from 'rxjs/operators';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'coursesite';
  winWidth$: Observable<number>;
  sub: Subscription[];
  sidebarTween: any;
  menuExpanded = new Subject();

  faBars = faBars;

  ngOnInit(): void {
    this.sub = [];
    this.winWidth$ = of(window.innerWidth);
    this.sidebarTween = TweenLite.from('#side-bar', .4, {left: -95, delay: 2, paused: true});

    // start timer
    this.menuExpanded.pipe(
       delay(3000)
       ).subscribe(() =>  {
         console.log('collapsing');
      this.collapseSidebar();
    });

    fromEvent(window, 'resize').subscribe((val: any ) => {
      if (val.currentTarget.innerWidth <= 500) {
        this.collapseSidebar();
      }
    });

    // sidebar funktionalitet hvis viewport <= 460
    const widthListner: Subscription = this.winWidth$.subscribe(val => {
      if ( val <= 460 ) {
      this.expandSidebar();
      } else {
        TweenLite.set('#side-bar', {left: 0});
      }

    });
    this.sub.push(widthListner);
  }

  ngOnDestroy(): void {
    this.sub.forEach(s => s.unsubscribe);
  }

  expandSidebar() {
    this.sidebarTween.play();

    this.menuExpanded.next(true);
  }

  collapseSidebar()  {
    this.sidebarTween.reverse();
  }

}

