import axios from "axios/index";
import { apiUrl } from './../config.json';

export async function getUsers() {
  const { data } = await axios.get(apiUrl + '/users?page=1');
  const { data: users } = data;
  return users;
}

export async function addUser(user) {
  return axios.post(apiUrl + '/users/', user);
}

export async function updateUser(id, info) {
  return axios.put(apiUrl + '/users/' + id, info);
}

export async function deleteUser(id) {
  return axios.delete(apiUrl + '/users/' + id);
}
