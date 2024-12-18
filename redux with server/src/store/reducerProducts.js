export let initialObjectProducts = {
    products:[]
}

export function getProducts() {
    return async (dispatch) => {
        let res = await fetch('http://localhost:5000/goods')
        let data = await res.json()
        dispatch({type:'GET PRODUCTS', payload: data})
    }
}

export function reducerProducts(state = initialObjectProducts, action) {
    if(action.type === 'GET PRODUCTS'){
        return {...state, products: action.payload}
    }
    
    return state
}