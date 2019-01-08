const initialState ={
    orders: [],
    isLoading: false,
    isFinish: false,
    isError: false 
}

const order = (state= initialState, action)=>{
    switch (action.type){
        case "ADDORDER_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADDORDER_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             orders: action.payload.data.data
         }
        case "ADDORDER_REJECTED":
         return{
             ...state,
             isError: true, isLoading: false
         }
         default: 
         return state;
    }
}

export default order;