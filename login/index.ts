const USERNAME_ID = 'exampleInputAccount'
const PASSWORD_ID = 'exampleInputPassword'
const LOGIN_BTN_ID = 'loginButton'

const DEFAULT_USER_NAME = 'admin'
const DEFAULT_USER_PASSWORD = '123456'

let usernameInputElement = document.getElementById(USERNAME_ID) as HTMLInputElement
let passwordInputElement = document.getElementById(PASSWORD_ID) as HTMLInputElement
let loginButton = document.getElementById(LOGIN_BTN_ID)

if ((usernameInputElement == null) || (passwordInputElement == null) || (loginButton == null)) {
    throw new Error('Hey, you broke it. Fix it!')
}

usernameInputElement.addEventListener('change', function (evt) {
    console.log(evt)
    // TODO validate and show helper text
})

passwordInputElement.addEventListener('change', function (evt) {
    console.log(evt)
    // TODO validate and show helper text
})

let storage = window.localStorage

function login(username: string, password: string) {
    if (username === DEFAULT_USER_NAME) {
        if (password === DEFAULT_USER_PASSWORD) {
            // TODO set current logged in user to local storage
            // TODO redirect user
            console.log(`Login successfully with default user account!`)
            storage.setItem(`swe102.state.loggedin.username`, username)
            return
        } else {
            // TODO show error text wrong password
            console.log(`Wrong password!`)
            return
        }
    }

    // TODO add new user to local storage
    let userInfoInLocalStorage = storage.getItem(`swe102.users.${username}`)
    if (userInfoInLocalStorage == null) {
        // TODO show error text user does not exit
        console.log(`User ${username} does not exit!`)
        return
    }

    console.log(userInfoInLocalStorage)
}

loginButton.addEventListener('click', function (evt) {
    console.log(evt)
    evt.preventDefault()

    let username = usernameInputElement.value
    let password = passwordInputElement.value

    if (!username) {
        // TODO show error text username is empty
        console.log(`Username is empty!`)
        return
    }

    if (!password) {
        // TODO show error text password is empty
        console.log(`Password is empty!`)
        return
    }

    login(username, password)
})
