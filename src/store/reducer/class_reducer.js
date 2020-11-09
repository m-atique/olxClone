const intial_state = {
class_code:'hsps10th',
name:' 10th Class'
}

export default (state = intial_state,action)=>{
    console.log(action)
    switch(action.type){
        case 'setdata':
            return({
                ...state,
                name:"9th class"

            })
            
    }
    return state
}
