import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotes } from './create-notes.component';

describe('CreateNotes', () => {
	let component: CreateNotes;
	let fixture: ComponentFixture<CreateNotes>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CreateNotes],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CreateNotes);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
