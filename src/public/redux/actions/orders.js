import axios from 'axios';

const baseUrl = 'http://192.168.1.108:3333';

export const addAllOrders = ()=>({
    type: "ADDORDER",
    payload: axios.get(baseUrl+'/order')
})