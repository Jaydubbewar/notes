import { Component } from '@angular/core';
import { CallFormService } from '../call-form.service';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent {
  constructor(private callForm:CallFormService, private FormMod:FormsModule){}

  addUser(data:any[]){
    console.log(data);
    
  }
}
