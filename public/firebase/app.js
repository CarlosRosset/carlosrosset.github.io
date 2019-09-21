var isLogged = true;

document.addEventListener('DOMContentLoaded', function () {
    isRead();
});

function isRead() {
    //--------
    const firebaseConfig = {
        apiKey: "AIzaSyCQnq12UWEk5yDP4LDyLKYLzcQvrbxfihM",
        authDomain: "rajus-c8a95.firebaseapp.com",
        databaseURL: "https://rajus-c8a95.firebaseio.com",
        projectId: "rajus-c8a95",
        storageBucket: "rajus-c8a95.appspot.com",
        messagingSenderId: "15843682947",
        appId: "1:15843682947:web:9f36ecb060b3fb07d709b6"
    };
    //--------
    try {
        // Initialize Firebase
        let app = firebase.initializeApp(firebaseConfig);
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        console.log('CDN Firebase - ON : ', `Firebase SDK iniciado com ${features.join(', ')}`);
        console.log('Versão => ', firebase.SDK_VERSION);
        // console.log(firebase.app().name);
        // console.log(firebase);

    } catch (e) {
        console.error(e);
    }
    //--------
    firebase.auth().onAuthStateChanged(function (rstuser) {
        if (rstuser) {
            // User is signed in.
            var displayName = rstuser.displayName;
            var email = rstuser.email;
            var emailVerified = rstuser.emailVerified;
            var photoURL = rstuser.photoURL;
            var isAnonymous = rstuser.isAnonymous;
            var uid = rstuser.uid;
            var providerData = rstuser.providerData;

            user.uid = uid;
            user.email = email;
            user.emailVerified = emailVerified;
            user.photoURL = photoURL;
            user.isAnonymous = isAnonymous;
            // user.providerData = providerData; 
            user.displayName = displayName;

            console.table(user);
            console.table(providerData);

            document.getElementById("login_avatar").src = user.photoURL;
            document.getElementById("name_user").innerHTML = user.displayName;

            isLogged = true;
            // estaLogado();
            // ...
        } else {
            // User is signed out.
            // ...
            console.log('usuário não logado');
            user = [];
            document.getElementById("login_avatar").src = user.photoURL;
            document.getElementById("name_user").innerHTML = user.displayName;

            isLogged = false;
            // estaLogado();
        }
    });
    //--------

    //--------
}




var d = new Date();
var t = d.getTime();
var counter = t;

/* document.getElementById("form").addEventListener("submit", (e) => {
    var paciente = document.getElementById("nomeUsuario").value;
    var cpf = document.getElementById("cpfUsuario").value;
    e.preventDefault();
    console.log(paciente + " " + cpf);
    form.reset();
}); */

function cadastrarPaciente() {
    console.log('Teste');
    var paciente = document.getElementById("nomeUsuario").value;
    var cpf = document.getElementById("cpfUsuario").value;
    cadastrarPaciente.preventDefault();
    console.log(paciente + " " + cpf);
    form.reset();
}