let usernameInput = document.getElementById('exampleAccount');
let emailInput = document.getElementById('exampleInputEmail');
let passwordInput = document.getElementById('examplePasswordInput');
let repeatPasswordInput = document.getElementById('exampleRepeatPasswordInput');
let fullNameInput = document.getElementById('exampleFullName');
let registerButton = document.getElementById('registerButton');
if ((usernameInput == null)
    || (emailInput == null)
    || (passwordInput == null)
    || (repeatPasswordInput == null)
    || (fullNameInput == null)
    || (registerButton == null)) {
    throw new Error('Hey, you broke it. Fix it!');
}
registerButton.addEventListener('click', function (evt) {
    console.log(evt);
    evt.preventDefault();
    let newUserInfo = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        repeatPassword: repeatPasswordInput.value,
        fullName: fullNameInput.value,
    };
    if (!newUserInfo.username) {
        // TODO show error text
        console.log(`username is empty!`);
        return;
    }
    if (!newUserInfo.email) {
        // TODO show error text
        console.log(`email is empty!`);
        return;
    }
    if (!newUserInfo.password) {
        // TODO show error text
        console.log(`password is empty!`);
        return;
    }
    if (!newUserInfo.repeatPassword) {
        // TODO show error text
        console.log(`repeat password is empty!`);
        return;
    }
    if (newUserInfo.password !== newUserInfo.repeatPassword) {
        // TODO show error text
        console.log(`Repeat password is not the same as entered password!`);
        return;
    }
    console.log(newUserInfo);
    // TODO where to redirect
    // TODO save user info to LocalStorage
    console.log(`Register successfully!`);
});
