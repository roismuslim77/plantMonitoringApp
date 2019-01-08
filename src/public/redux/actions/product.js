import axios from 'axios';

const baseUrl = 'http://192.168.1.108:3333';

export const addAllProducts = ()=>({
    type: "ADDPRODUCT",
    payload: axios.get(baseUrl+'/products')
})