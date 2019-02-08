const initialState ={
    soil: 0,
    temp: 0,
    isLoading: false,
    isFinish: false,
    isError: false 
}

const value =(state= initialState, action)=>{
    switch (action.type){
        case "ADDVALUE_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADDVALUE_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             soil: action.payload.data[action.payload.data.length-1].soil,
             temp: action.payload.data[action.payload.data.length-1].suhu
         }
        case "ADDVALUE_REJECTED":
         return{
             ...state,
             isError: true, isLoading: false
         }
         default: 
         return state;
    }
}

export default value;