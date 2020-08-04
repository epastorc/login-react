import axios, { AxiosInstance }  from 'axios';

export default class ApiGeneric {
    request: AxiosInstance;
    constructor(pathEndPoint: string) {
        this.request = axios.create({
            baseURL: pathEndPoint,
            timeout: 10000
        });
    }

    get(route: string) {
        return this.request.get(route);
    }

}


