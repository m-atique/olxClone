const intial_state = { 
    display:'none',
    users:[],
    current_user:{}


}

export default (state = intial_state, action) => {
    switch(action.type){
        case 'setuser':
            return({
                ...state,
                current_user:action.payload

            })
        case 'showUser':
            return({
                ...state,
                display:'block'
            })
    }

    return state
}


