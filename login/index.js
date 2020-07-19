const USERNAME_ID = 'exampleInputAccount'
const PASSWORD_ID = 'exampleInputPassword'

let usernameInputElement = document.getElementById(USERNAME_ID)
let passwordInputElement = document.getElementById(PASSWORD_ID)

if ((usernameInputElement == null) || (passwordInputElement == null)) {
    throw new Error('Hey, you broke it. Fix it!')
}

storage = window.localStorage
