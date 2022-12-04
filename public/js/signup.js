const signUpForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/signup', {
            method: POST,
            body: JSON.stringify({email, password}),
            headers: { 'Content-type': 'application/json'}
        })
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Sign up failed, try again')
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
