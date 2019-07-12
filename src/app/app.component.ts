import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'sellal';

  constructor() {
    this.changeName('cherif');
  }

  changeName(name: string) {
    this.name = name;
  }

}
