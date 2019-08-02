function testarBluetooth(){
    let retorno = document.getElementById('retorno');
    retorno.innerHTML = "valor inicial"
    navigator.bluetooth.requestDevice(options).then(function(device) {
        retorno.innerHTML = 'Name: ', device.name;
        // Do something with the device.
      })
      .catch(function(error) {
        retorno.innerHTML = "Something went wrong. " + error;
      });
}