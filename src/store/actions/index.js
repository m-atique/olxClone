import firebase from '../../config/firebase'
// import Auth from '../../Components/auth/auth'

const firebase_login =(history)=>{
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

// const pgAuth =(history)=>{
//     return (dispatch)=>{
     
//     }
// }
export {
 firebase_login
 } 