export interface GetIp {
	ip: string;
}

export interface AlertIp {
	alert: string;
}

export interface GetHeader {
	['Accept-Language']: string;
	['Host']: string;
	['Accept-Charset']: string;
	['Accept']: string;
	['User-Agent']: string;
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
