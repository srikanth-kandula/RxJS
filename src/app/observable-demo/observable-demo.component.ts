import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnDestroy {
  private observable$;
  private subscription;

  constructor() {
    this.observable$ = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.subscription = this.observable$.subscribe({
      next: val => { console.log(`first Observable subscription: ${val}`) },
      complete: () => { console.log('first Observable subscrition completed')},
      error: (error) => { console.log(`this error occuredin first Observable: ${error}`)}
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();//must to avoid memory leaks
  }

}
