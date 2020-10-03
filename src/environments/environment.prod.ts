export const ENVIRONMENT = {
	production: true,

	services: {
		jsontest: {
			apiUrl: {
				ip: 'http://ip.jsontest.com',
				datetime: 'http://date.jsontest.com/',
				headers: 'http://headers.jsontest.com/',
			},
		},
		jsonplaceholder: {
			apiUrl: {
				post: 'https://jsonplaceholder.typicode.com/posts',
			},
		},
	},
};
