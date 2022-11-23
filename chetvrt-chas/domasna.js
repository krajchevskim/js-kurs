function UserPass(username, password) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (username.length >= 8 && password.length >= 8 && username == username.toLowerCase() && password !== password.toLowerCase() && password !== NaN && password !== password.match(specialChars)){
        console.log('Login Successful')
    } else if (password.length < 8) {
        console.log('Password must be at least 8 characters long')
    }
    
    else {
        console.log('Login Invalid')
    } 
}

UserPass('krajchevskim', 'sGen19!')
UserPass('krajchevskim', 'semosGen19!')
UserPass('krajche', 'semosGen19!')