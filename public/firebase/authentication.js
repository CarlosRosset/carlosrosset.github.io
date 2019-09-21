function cadastrar() {
  user.login = document.getElementById("input_login_email").value;
  user.password = document.getElementById('input_login_password').value;

  firebase.auth().createUserWithEmailAndPassword(user.login, user.password)
    .then(function () {
      window.alert('Usuário criado com sucesso');
    })
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      console.log('não funcionou');
      console.log(errorCode);
      console.log(errorMessage);
    });
}

function logar() {
  user.login = document.getElementById("input_login_email").value;
  user.password = document.getElementById('input_login_password').value;

  firebase.auth().signInWithEmailAndPassword(user.login, user.password)
    .then(function (user) {

      window.alert('Usuário logado com sucesso');

      //      console.log('logado com sucesso ', user, user.user.email);

      // Retorna Token JWT do usuário => https://jwt.io/
      let idTokenResult = firebase.auth().currentUser.getIdTokenResult(true);
      user.tokenFirebase = idTokenResult;
      console.log(idTokenResult);


    }).catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      //      console.log('não funcionou');
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}

function logarWithGoogle() {

  // Using a popup.
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token.
    let token = result.credential.accessToken;
    // The signed-in user info.
    // let user = result.user;
    user.token = token;
  });
}

function deslogar() {

  window.alert('Usuário deslogado');

  firebase.auth().signOut();
  
}