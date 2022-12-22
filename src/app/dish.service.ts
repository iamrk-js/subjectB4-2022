import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  // public subject: Subject<string> = new Subject<string>()
  public subject: Subject<string> = new BehaviorSubject<string>("Pizza")
  constructor() { }

  sendDish(dishName: string) {
    this.subject.next(dishName)
  }
  reciveDish() {
    return this.subject.asObservable()
  }
}
