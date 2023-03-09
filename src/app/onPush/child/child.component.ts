import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() user: User;
  constructor(
    private zone: NgZone,
    private element: ElementRef,
    private cdr: ChangeDetectorRef
    ) {
    this.zone.run(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'red';
        this.user.firstName = 'Mr';
        //this.cdr.markForCheck();
      }, 1000);
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.style.backgroundColor = 'black';
        this.user.lastName = 'Sir';
        //this.cdr.markForCheck();
      }, 2000);
    });
    
  }
  ngOnInit() {}
}
