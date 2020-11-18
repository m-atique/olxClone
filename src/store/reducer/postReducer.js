const intial_state = { 
    current_add:{
        catagory:'',
        subcatg:'',
        title:'',
        price:'',
        detail:'',
        description:'',
        user_id:'',
    },
    
    adds:[
        {
            price:'8000',
            detail:'Low cas t afforadable, bala,bala bala etc',
            date: '04 Oct 2020',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSntCaBr_ocdJkIudrh-lzgJR79Q0wbl-kUNg&usqp=CAU"
        },
        {
            price:'7000',
            detail:'2nd bala,bala bala etc',
            date: '9 nov 2020',
            featured:'yes',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZG3HqGJcKzC8DpxDffvW8RcajA5VVMEJ1Hg&usqp=CAU"
        },
        {
            price:'2000',
            detail:'   3rd Low cas t afforadable, bala,bala bala etc',
            date: '14 Oct 2020',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRju-bogWcbyRGXX9FsPpjL4i_0JkGQTRt8cQ&usqp=CAU"
        },
        {
            price:'4000',
            detail:'   4rd Low cas t afforadable, bala,bala bala etc',
            date: '14 Oct 2020',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzdrTJyryKJGkMCWbrYxkLOM3zOy-DNwwXQQ&usqp=CAU'
        },
        {
            price:'7000',
            detail:'2nd bala,bala bala etc',
            date: '9 nov 2020',
            featured:'yes',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZG3HqGJcKzC8DpxDffvW8RcajA5VVMEJ1Hg&usqp=CAU"
        },
        {
            price:'2000',
            detail:'   3rd Low cas t afforadable, bala,bala bala etc',
            date: '14 Oct 2020',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRju-bogWcbyRGXX9FsPpjL4i_0JkGQTRt8cQ&usqp=CAU"
        },
    ]
    
}

export default (state = intial_state, action) => {
 
    switch(action.type){
        case 'current_add':
            return({
                ...state,
                current_add:{
                    ...state.current_add,
                    catagory:state.current_add.catagory,
                    catagory:action.payload
                   
                }

            })

        case 'current_add_subcat':
            return({
                
                ...state,
                current_add:{
                    ...state.current_add,
                    subcatg:state.current_add.subcatg,
                    subcatg:action.payload
                   
               }
            })
            case 'new_post':
                return({
                    
                    ...state,
                    current_add:state.current_add,
                     current_add:action.payload,
                    adds:state.adds,
                    adds:[action.payload,...state.adds]
                    
                })   
    }
    
    console.log("data passed",state.current_add) 
    
    return state
    
}

