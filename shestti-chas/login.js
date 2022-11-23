function login () {
    const username = document.getElementById('username').value

    const password = document.getElementById('password').value

    validateLoginCredentials(username, password)
}

function checkPassword (event) {
    console.log(event.target.value)
}

function validatePassword(username, password) {
    // guard clause
    let error = ''
    let password = element.value

    if (!username || !password) {
       error = ('Please input a valid username and password!')
       
    }
  
    if (username.length < 8 || password.length < 8) {
       error = ('Username and password must be at least 8 characters long')
      
    }
    
    if (username === username.toLowerCase() || username === username.toUpperCase()) {
       error = ('Username must contain a mix of lowercase and uppercase characters')
      
    }
  
    if (password === password.toLowerCase() || password === password.toUpperCase()) {
       error = ('Password must contain a mix of lowercase and uppercase characters')
      
    }
  
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if (!specialChars.test(username) || !specialChars.test(password)) {
       error = ('Username and password must contain at least one special character')
      
    }
  
    if (!/\d/.test(username) || !/\d/.test(password)) {
       error = ('Username and password must contain at least one number')
      
    }

    ('Login successful!')
  }

  // naprai copy od pushot na kocho cuz adhd