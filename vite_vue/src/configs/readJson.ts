import axios from 'axios';

const instance = axios.create({
    baseURL: './'
})
export function getHomepage() {
    return instance.get('homepage.json');
}