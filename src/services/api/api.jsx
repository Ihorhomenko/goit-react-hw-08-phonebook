import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

export const getContacts = async()=> {
    const {data} = await instance.get("/");
    
    return data;
}

export const addContacts = async (data) => {
    const {data: result} = await instance.post("/", data);
    return result;
}

export const removeContacts = async (id) => {
    const {data: result} = await instance.delete(`/${id}`);
    return result;
}

export const register = async(data) => {
    const {data: result} = await instance.post('/users/signup', data)
    return result
}

export const login = async(data) => {
    const {data: result} = await instance.post('/users/login', data)
    return result
}

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};