const { doc } = require("prettier");

async function newFormHandler(event) {
    console.log("got hereeeee");
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#inputPassword').value;
    

    console.log(client_name, description, address, phone, dob);

    const Response = await fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
    }),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }

  document
    .querySelector('.loginform')
    .addEventListener('submit', newFormHandler); 