export interface GetIp {
	ip: string;
}

export interface GetDatetime {
	milliseconds_since_epoch: number;
}

export interface GetHeader {
	['Accept-Language']: string;
	['Host']: string;
	['Accept-Charset']: string;
	['Accept']: string;
	['User-Agent']: string;
}

export class Post {
	userId: number;
	id?: number;
	title: string;
	body: string;
}
