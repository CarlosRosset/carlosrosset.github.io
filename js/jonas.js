function bluetooth() {

    var retorno = document.getElementById('retorno');

    let options = {};
    options.acceptAllDevices = true;    
       
    navigator.bluetooth.requestDevice(options)
        .then(device => {
            retorno.innerHTML = " device ", device;
            retorno.innerHTML += " Name: " + device.name + "\n";
            retorno.innerHTML += " Id: " + device.id + "\n";
            retorno.innerHTML += " Connected: " + device.gatt.connected + "\n";
        })
        .catch(error => {
            retorno.innerHTML += " Argh! " + error + "\n";
        });

    console.log('fim');
}
