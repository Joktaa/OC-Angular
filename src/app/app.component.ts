import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  seconde: number;
  counterSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe((
      (value: number) => {
        this.seconde = value;
      }
    ));
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

}
