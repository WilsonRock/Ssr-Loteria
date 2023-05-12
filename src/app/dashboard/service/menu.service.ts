import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuChangeEvent } from '../components/interfaces/menuchangeevent';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  constructor() { }

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
}
