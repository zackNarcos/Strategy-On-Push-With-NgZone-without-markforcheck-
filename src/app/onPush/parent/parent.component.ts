import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  user: User = { firstName: 'Pierre', lastName: 'Nédélec' };
}
