const intial_state = { addModalShow: false }

export default (state = intial_state, action) => {
    console.log(action)
    switch (action.type) {
        case 'showmodal':
            return ({
                ...state,
                addModalShow: true

            })
        case 'hidemodal':
            return ({
                ...state,
                addModalShow: false

            })

    }
    return state
}


