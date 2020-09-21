import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tm-capstone-frontend-stub';

  getName(){
    return this.title
  }
  obj={
    age:24
  }
}
