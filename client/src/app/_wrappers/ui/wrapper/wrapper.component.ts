import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { menu } from '../../model/menu';
import { NavItem } from '../../model/nav-item';
import { MediaChange, MediaObserver } from "@angular/flex-layout";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnDestroy {
  opened: boolean = true;
  private mediaWatcher!: Subscription;
  public menu: NavItem[] = menu;

  constructor(private media: MediaObserver) { 
    this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
      this.handleMediaChange(mediaChange);
  })
  }

  private handleMediaChange(mediaChange: MediaChange) {
    if (this.media.isActive('lt-md')) {
        this.opened = true;
    } else {
        this.opened = false;
    }
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }

}
