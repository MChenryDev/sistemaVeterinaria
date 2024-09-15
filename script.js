// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Datos de prueba para un inicio de sesión exitoso
    const validUsername = "admin";
    const validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login exitoso. Bienvenido!";
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});


document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const owner = document.getElementById('owner').value;
    const petMessage = document.getElementById('petMessage');

    // Mostrar un mensaje de éxito después del registro
    petMessage.textContent = `Mascota registrada exitosamente: ${petName}, ${species}, ${breed}, ${age} años, Dueño: ${owner}`;
});


