const loginpage = async(event) => {
    event.preventDefault();

    // const name = document.querySelector('#name-login').value.trim()
    const email = document.querySelector('#email-login').value.trim()
    const password = document.querySelector('#password-login').value.trim()

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type' : 'application/json'},
        });

        if(response.ok){
            document.location.replace('/');
        } else {
            alert ('Sorry, failed to log in');
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);