import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesView } from './notes-view/notes-view.component';
import { CreateNotes } from './create-notes/create-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from './../services/note/note-service.service';
import { NotesComponent } from './notes/notes.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [NotesView, CreateNotes, NotesComponent],
	imports: [
		CommonModule,
		NotesRoutingModule,
		FormsModule,
		ReactiveFormsModule,

		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
	],
	providers: [NoteService],
})
export class NotesModule {}
