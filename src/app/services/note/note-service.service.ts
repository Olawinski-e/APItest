import { Injectable } from '@angular/core';
import { Note } from './../../classes/note/note';

@Injectable({
	providedIn: 'root',
})
export class NoteService {
	lastId: number = 0;
	notes: Note[] = [];

	constructor() {}
	getNotes(): Note[] {
		return this.notes;
	}

	addNote(note: Note): NoteService {
		if (!note.id) {
			note.id = ++this.lastId;
		}
		this.notes.push(note);
		return this;
	}

	deleteNote(id: number): NoteService {
		this.notes = this.notes.filter((note) => note.id !== id);
		console.log(this.notes);
		return this;
	}
}
