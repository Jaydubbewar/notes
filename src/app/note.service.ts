import { Injectable } from '@angular/core';
import {Note } from './note';
import {addDoc, collectionData,deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private fs:Firestore) { }

  //Add new note code here
  addNote(note:Note){
    note.id = doc(collection(this.fs,'id')).id
    return addDoc(collection(this.fs,'Notes'),note)
  }

  //get al notes from database
  getNotes():Observable<Note[]>{
    let noteRef = collection(this.fs,'Notes')
    return collectionData(noteRef,{idField:'id'}) as Observable<Note[]>
  }

  //delete notes from database
  deleteNote(note:Note){
    let docref = doc(this.fs,`Notes/$(note.id)`);
    return deleteDoc(docref)
  }

  updateNote(note:Note, notes:any){
    let docRef = doc(this.fs,`Notes/${note.id}`);
    return updateDoc(docRef, notes)
  }
}
