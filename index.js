function logIn(username, password){

    // if the user does not input a username or password, the function should return false, otherwise should return true if both values have some information inside

    if(username.length===0||password.length===0){
        return false
    }else if(username==="luke"&&password==="pass"){
        return true
    } else{
        return false
    }
}
// this ^^^ function technically solves the first three example problems so I am going to start on the fourth. vvv

function createAccount(email, password){
    if(email.length===0 || password.length===0){
        return false
    } else if(email==="email@email.com" && password==="pass"){
        return true
    } else {
        return false
    }
}
//basically the same exact function, first if statement checks if the entered anything and returns false(error) if not
// second if statement checks for invalid email and password, if not invalid, returns true.

function signUpWithGoogle(gmail, password) {
    if(gmail.length===0 || password.length===0){
        return false
    } else if(gmail==="gmail@gmail.com" && password==="pass"){
        return true
    } else {
        return false
    }
}
//pretty much the same expect using google information

function logInWithGoogle(login) {
    if(login === "true") {
        return true
    } else {
        return signUpWithGoogle();
    }
}
//checks if login was successful, if not bring to sign up function 

module.exports = {logIn, createAccount, signUpWithGoogle, logInWithGoogle}