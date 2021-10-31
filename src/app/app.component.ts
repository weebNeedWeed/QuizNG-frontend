import { Component } from '@angular/core';
import * as env from '../environments/environment';

console.log(env);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
