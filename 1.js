let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");
let incorrect = document.getElementById("incorrect");
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
var signUp = document.querySelector("#signUp")

let accounts = [];

if(getAcc()){
    accounts = getAcc()}

function saveAcc(){
    localStorage.setItem("accounts",JSON.stringify(accounts))
}

function getAcc(){
    return JSON.parse(localStorage.getItem("accounts"))
}

function addAcc(){


    if( signupName.value <=0){

        document.getElementById("exist").innerHTML = "Enter a User Name"

    } else if ( signupEmail.value <=0){

        document.getElementById("exist").innerHTML = "Enter an Email"

    }else if ( signupPassword.value <=0){

        document.getElementById("exist").innerHTML = "Enter a Password"

    }else{

        let account = {
            name :signupName.value,
            email: signupEmail.value, 
            password: signupPassword.value,
        }
        accounts.push(account);
        saveAcc()
        document.getElementById("exist").innerHTML = "you SignedUP Correctly"
    }
}

function clearInput() {
            signupName.value.value = "";
            signupEmail.value = "";
            signupPassword.value = "";
}
function login() {
            let isLoggedIn = false;
          
            for (var i = 0; i < accounts.length; i++) {
              if (
                accounts[i].email.toLowerCase() === signinEmail.value.toLowerCase() &&
                accounts[i].password === signinPassword.value
              ) {
                isLoggedIn = true;
          
              
                localStorage.setItem('loginUser', accounts[i].name)
                window.location.href = "111.html";
                break;
              }
            }
          
            if (!isLoggedIn) {
              incorrect.innerHTML = `Incorrect email or password`;
            }
}
          displyName()
function displyName(){
            var username = localStorage.getItem('loginUser')

            if (username) {
                document.getElementById('username').innerHTML = "Welcome " + username
            }
}

function logout() {
            localStorage.removeItem('loginUser')
}