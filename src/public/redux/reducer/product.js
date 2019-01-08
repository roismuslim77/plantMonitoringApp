const initialState ={
    products: [],
    isLoading: false,
    isFinish: false,
    isError: false 
}

const product =(state= initialState, action)=>{
    switch (action.type){
        case "ADDPRODUCT_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADDPRODUCT_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             products: action.payload.data.data
         }
        case "ADDPRODUCT_REJECTED":
         return{
             ...state,
             isError: true, isLoading: false
         }
         default: 
         return state;
    }
}

export default product;