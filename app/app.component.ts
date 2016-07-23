import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
  //[] property binding C to D
  //(event binding) D to C

  title= 'Customer App';
  name= 'Steve';
  stevescolor= 'blue';

  changeSuitColor() {
    this.stevescolor = this.stevescolor === 'blue' ? 'red' : 'blue';
  }
}
