export interface GetIp {
	ip: string;
}

export interface GetDate {
	date: string;
	time: string;
}

export class Post {
	userId: number;
	id?: number;
	title: string;
	body: string;
}
