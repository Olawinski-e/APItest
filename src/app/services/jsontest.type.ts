export interface GetIp {
	ip: string;
}

export interface GetDate {
	milliseconds_since_epoch: number;
}

export class Post {
	userId: number;
	id?: number;
	title: string;
	body: string;
}
