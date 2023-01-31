import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent{

noteForm!:FormGroup

noteObj: Note={
  id: '',
  note_title: '',
  note_dec: ''
}

constructor(private fb:FormBuilder,private noteService:NoteService){ 
  this.noteForm = this.fb.group({
    title:['',Validators.required],
    description:['',Validators.required],
  })
}

  addNote(){
    const {value } = this.noteForm
    console.log(value);
    this.noteObj.id='',
    this.noteObj.note_title = value.title,
    this.noteObj.note_dec = value.description

    this.noteService.addNote(this.noteObj).then((note)=>{
      if(note){
        alert("note added sccessful")
      }
    })
  }

}
