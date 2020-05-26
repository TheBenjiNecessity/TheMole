import axios from 'axios';

import { config } from '../constants/environment.constants';

export class ApiHelperService {
    serviceUrl = config.url.API_URL;

    get(url) {
        return this.request(`${this.serviceUrl}/${url}`, 'GET');
    }

    post(url, body, header = 'application/json') {
        return this.request(`${this.serviceUrl}/${url}`, 'POST', body, header);
    }

    put(url, body) {
        return this.request(`${this.serviceUrl}/${url}`, 'PUT', body);
    }

    del(url) {
        return this.request(`${this.serviceUrl}/${url}`, 'DELETE');
    }

    request(url, method, body = null, header = 'application/json') {
        let headers = {
            'Content-Type': header
        };
        let config = {
            method: method,
            url: url,
            headers: headers,
            data: body
        };
        
        return axios(config).then(response => response.data);
    }
}