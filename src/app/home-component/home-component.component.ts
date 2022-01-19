import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  constructor() {}
  obsSub: Subscription;
  ngOnInit(): void {
    // this.obsSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.obsSub = customIntervalObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.obsSub.unsubscribe();
  }
}
