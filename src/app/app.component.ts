import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NAVEESHA';
  paragraph = 'I am a undergraduate software engineer';
  counter = 0;
  buttonclick(){
    this.counter++;
  }
  buttonclicktwo(){
    this.counter--;
  }
}
