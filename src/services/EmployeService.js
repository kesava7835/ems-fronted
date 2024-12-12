import axios from "axios";

const rest_api_url='https://ems-backend-spring-production.up.railway.app';

export const listEmploye= () => axios.get(rest_api_url);

export const Employepost=(employe)=> axios.post(rest_api_url,employe);

export const getEmploye=(empoyeid)=> axios.get(rest_api_url+'/'+empoyeid);

export const putEmploye=(id,emp)=> axios.put(rest_api_url+'/'+id,emp);

export const DeleteEmploye=(id)=> axios.delete(rest_api_url+'/'+id);