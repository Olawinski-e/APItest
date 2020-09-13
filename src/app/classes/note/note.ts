export class Note {
	id: Number;
	title: String = '';
	content: String = '';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
