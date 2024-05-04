import axios from "axios";

const api= axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
  },
  params:{
    language:"tr-TR"
  }
});
export default api;
