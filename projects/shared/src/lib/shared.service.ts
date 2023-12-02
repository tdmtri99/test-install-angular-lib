import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  _count$ = new BehaviorSubject(0);

  get count$(): Observable<number> {
    return this._count$.asObservable();
  }

  increase(): void {
    this._count$.next(this._count$.value + 1);
  }

  decrease(): void {
    this._count$.next(this._count$.value + 1);
  }
}
