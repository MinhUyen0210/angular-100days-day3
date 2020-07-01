import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template:`
  <h2>Hello there</h2>
  <h3>Your name: {{ user.name }}</h3>
    <p>Your age: {{ user.age }}</p>

    <div *ngIf="user.age >= 13"; else noPG13>
Bạn có thể xem nội dung PG-13    </div>
<ng-template #noPG13>
    <div *ngIf="user.age < 13">
  Bạn không thể xem nội dung PG-13
</div>
</ng-template>`,

  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  user ={
    name: 'Uyen',
    age: 11
  }

  handler(event){
    console.log("clicked", event);
  }

  
}
