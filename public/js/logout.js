const logout = async(event) => {
    event.preventDefault();

    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert()// have to add alert
    }
};

document.querySelector('#logout').addEventListeners('click', logout);