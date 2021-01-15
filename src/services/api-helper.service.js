import axios from 'axios';

import { config } from '../constants/environment.constants';

const apiHelperService = {
	get: function(url) {
		return this.request(`${config.url.API_URL}/${url}`, 'GET');
	},

	post: function(url, body, header = 'application/json') {
		return this.request(`${config.url.API_URL}/${url}`, 'POST', body, header);
	},

	put: function(url, body) {
		return this.request(`${config.url.API_URL}/${url}`, 'PUT', body);
	},

	del: function(url) {
		return this.request(`${config.url.API_URL}/${url}`, 'DELETE');
	},

	request: function(url, method, body = null, header = 'application/json') {
		let headers = {
			'Content-Type': header
		};
		let config = {
			method: method,
			url: url,
			headers: headers,
			data: body
		};

		return axios(config).then((response) => response.data);
	}
};

export default apiHelperService;
