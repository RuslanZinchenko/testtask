import axios from 'axios';

const USERS_URL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/users';

const POSITION_URL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

const TOKEN_URL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/token';

export const fetchUsers = (pageNumber = 1, count = 3) =>
  axios.get(`${USERS_URL}?page=${pageNumber}&count=${count}`);

export const fetchUser = (id = 1) => axios.get(`${USERS_URL}/${id}`);

export const fetchPosition = () => axios.get(`${POSITION_URL}`);

export const fetchToken = () => axios.get(`${TOKEN_URL}`);
