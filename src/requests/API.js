import { create } from 'apisauce';

const API = create({
  baseURL: 'http://desafio4devs.forlogic.net/api',
  headers: {
    Authorization: 'desafio-foclogic-10cd8',
  },
});

export default API;
