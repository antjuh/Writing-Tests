const {logIn, createAccount, signUpWithGoogle, logInWithGoogle} = require("./index.js");

test('was logging in successful?', ()=>{
    expect(logIn("luke", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("luke", "pass")).toBeTruthy();

    // checking for the exact same result
    expect(logIn("ted", "pass")).not.toBeTruthy();
    expect(logIn("ted", "pass")).toBeFalsy();
})


test('was creating an account successful?', ()=>{
    expect(createAccount("email@email.com","pass")).toBeTruthy();
    expect(createAccount("NotAnEmail@email.com","password")).toBeFalsy();
    expect(createAccount("","")).toBeFalsy();
})

test('Signed up with google?', ()=>{
    expect(signUpWithGoogle("gmail@gmail.com","pass")).toBeTruthy();
    expect(signUpWithGoogle("noEmail","noPass")).toBeFalsy();
    expect(signUpWithGoogle("","")).toBeFalsy();
})

test('Login with Google?', ()=>{
    //expect(logInWithGoogle("success")).toBeTruthy();
    expect(logInWithGoogle("true")).toBeTruthy();
    expect(logInWithGoogle("false")).toBeFalsy();
})
//text("feature that we want to work", ()=>{

//     see details function
//     function called show details of single player
//     showcase players name
//     theres a picture value
//})