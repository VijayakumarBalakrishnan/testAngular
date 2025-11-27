import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./first/first";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [First,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   msg='';
receivedataparent(event:string) {
this.msg=event;
console.log("child component to parent "+this.msg);

//throw new Error('Method not implemented.');
}
 
  data = "train give for ngmodel";
messagefromparent="parent component app.ts file";
//receivemsg(event: string) {
  //this.msg=event;
  //console.log("parent app.ts file :"+this.msg);
//throw new Error('Method not implemented.');
}

  //protected readonly title = signal('AngularDemo');
  //message= "sending data from parent to child";
  
  
//}
