function testarBluetooth(){
    let retorno = document.getElementById('retorno');
    retorno.innerHTML = "valor inicial"
    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service']
      })
      .then(device => { retorno.innerHTML = 'Oi' + device })
      .catch(error => { retorno.innerHTML = error; });
}