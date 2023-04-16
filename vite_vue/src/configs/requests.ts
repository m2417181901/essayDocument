import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
})
export function createDocument(data: object) {
   return instance.post(`/getdocument`, data);
}