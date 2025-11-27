import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule,CommonModule],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First  {
  data='parent';
  title='ownform';
 // @Input() dataOne="";
 @Input() first='';

 @Output() checkData=new EventEmitter<String>();
 sayHello(){
  this.checkData.emit("I am from child component");
  console.log(this.checkData);
 }


 //@Output() passData=new EventEmitter<string>();

 //checkchildData(){
 // this.passData.emit("Hi I am from child Data");
 // console.log(this.passData);
 //}
 
}
