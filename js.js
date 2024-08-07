document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and parsed');

    fetch('https://e699-177-91-39-96.ngrok-free.app/api/user')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(user => {
            console.log('Data received:', user);
            const usersDiv = document.getElementById('users');
            if (!usersDiv) {
                console.error('Element with id "users" not found');
                return;
            }
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Age:</strong> ${user.age}</p>
                <p><strong>About Me:</strong> ${user.aboutme}</p>
            `;
            usersDiv.appendChild(userDiv);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
