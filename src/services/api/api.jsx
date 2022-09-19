import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const token = {
  set(token) {
    instance.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    instance.defaults.headers.common['Authorization'] = '';
  },
};

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContacts = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};

export const register = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  return result;
};

export const logOut = async () => {
  return await instance.post('/users/logout');
};

export const currentUser = async () => {
  const { data: result } = await instance.post('/users/current');
  return result
}
