import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesView } from './notes-view.component';

describe('NotesViewComponent', () => {
	let component: NotesView;
	let fixture: ComponentFixture<NotesView>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NotesView],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotesView);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
