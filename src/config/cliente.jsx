import axios from 'axios'

const cliente = axios.create({
     //Desarrollo
     baseURL: 'http://localhost:4000/api/'
     //Produccion
    //baseURL: 'https://cronos-backend.onrender.com/api/'
})

export default cliente;