import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const createUser = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  token.set(data.token);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  token.set(data.token);
  return data;
};

export const logOutUser = async () => {
  await instance.post('/users/logout');
  token.unset();
};

export const fetchCurrentUser = async persistedToken => {
  token.set(persistedToken);
  const { data } = await instance.get('/users/current');
  return data;
};
