import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/services/note/note-service.service';
import { Note } from '../../classes/note/note';

@Component({
	selector: 'app-create-notes',
	templateUrl: './create-notes.component.html',
	styleUrls: ['./create-notes.component.scss'],
})
export class CreateNotes implements OnInit {
	public noteCreateForm: FormGroup;
	noteTitle: String;
	noteContent: String;

	constructor(private noteService: NoteService) {}

	ngOnInit(): void {}

	addNote() {
		var note = new Note();
		note.title = this.noteTitle;
		note.content = this.noteContent;
		this.noteService.addNote(note);
	}

	public onSubmit() {}
}
