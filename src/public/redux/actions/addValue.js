import axios from 'axios';

const baseUrl = 'http://iotprojek.idmustopha.com';

export const addAllValue = ()=>({
    type: "ADDVALUE",
    payload: axios.get(baseUrl+'/getdata.php')
})