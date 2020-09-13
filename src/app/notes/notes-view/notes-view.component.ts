import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note-service.service';
import { Note } from '../../classes/note/note';
import { NotesComponent } from '../notes/notes.component';

@Component({
	selector: 'app-notes-view',
	templateUrl: './notes-view.component.html',
	styleUrls: ['./notes-view.component.scss'],
})
export class NotesView implements OnInit {
	notes: Note[] = [];
	id: any = Note;

	constructor(private noteService: NoteService) {}

	ngOnInit(): void {
		this.getNotes();
		setInterval(() => {
			this.getNotes();
		}, 1);
	}

	getNotes() {
		this.notes = this.noteService.getNotes();
	}

	deleteNote() {
		this.noteService.deleteNote(this.id);
		console.log(this.id);
		console.log(this.noteService.notes);
	}
}
