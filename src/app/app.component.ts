import { Component } from '@angular/core';
import { fadeAnimation } from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] // register the animation

})
export class AppComponent {
  title = 'mytask';
}
