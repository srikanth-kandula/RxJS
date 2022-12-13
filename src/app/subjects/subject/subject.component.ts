import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnDestroy {
  private subject$;

  constructor() {
    this.subject$ = new Subject();
    this.subject$.subscribe({
      next: val => {console.log(`first subject subscription: ${val}`)},
      error: err => {console.log(`this error occured in first subject subscription: ${err}`)},
      complete: () => {console.log('first subject subscritpion completed')}
    });
    this.subject$.next(99);
    this.subject$.next(55);
    this.subject$.subscribe({
      next: val => { console.log(`second subject subscription: ${val}`) },
      error: err => { console.log(`this error occured in second subject subscription: ${err}`) },
      complete: () => { console.log('second subject subscritpion completed') }
    });
    /**
     * notice that the first subscriber logs all values, whereas, the second subscriber logs only 66
     */
    this.subject$.next(66);
   };

  ngOnDestroy(): void {
    this.subject$.unsubscribe(); // must to avoid memory leaks
  }

}
