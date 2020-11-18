import firebase from '../../config/firebase'
import storage from '../../config/firebase'
import history from '../../config/history'

const firebase_login =()=>{
    return (dispatch)=>{
       
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                
                var token = result.credential.accessToken;     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                
                var user = result.user;                         // The signed-in user info.
               
                let create_user ={
                    name:user.displayName,
                    email:user.email,
                    pic: user.photoURL,
                    uid:user.uid
                }
                firebase.database().ref('/').child(`user/${user.uid}`).set(create_user)
                .then(()=>{
                    dispatch({
                        type:'setuser',
                        payload:create_user
                    })
                    alert('You are logged in ')
                    history.push('/')
                   
                })

              }).catch(function(error) {                        // Handle Errors here.
                
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
               
              });
       
    }
    
}


const showmodal =()=>{
    return (dispatch)=>{
        
        dispatch({
            type:'showmodal',    
        })
    }  
}
const hidemodal =()=>{
    return (dispatch)=>{
        dispatch({
            type:'hidemodal',
            
        })
    }
    
}

const show_user=()=>{
    return (dispatch)=>{
        dispatch({
            type:'showUser'
        })
    }
}

const saveCatg=(MainCat)=>{
    
    return (dispatch)=>{
        dispatch({
            type:'current_add',
            payload: MainCat
        })
        
    }
    
}



 const SaveSubcat = (subcat)=>{
    return (dispatch)=>{
        dispatch({
        type:'current_add_subcat',
        payload: subcat,
     })
    }
    
}

const PostData=(new_add)=>{
    return (dispatch)=>{
        dispatch({
        type:'new_post',
        payload:new_add
    })
    firebase.database().ref('/').child(`adds/add`).set(new_add)
        history.push('/')
    }

}




export {
 firebase_login,
 showmodal,
 hidemodal,
 show_user,
 saveCatg,
 SaveSubcat,
 PostData

 } 