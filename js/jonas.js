function bluetooth() {

    var retorno = document.getElementById('retorno');

    let options = {};
    options.acceptAllDevices = true;    
       
    navigator.bluetooth.requestDevice(options)
        .then(device => {
            retorno = " device ", device;
            retorno += " Name: " + device.name + "\n";
            retorno += " Id: " + device.id + "\n";
            retorno += " Connected: " + device.gatt.connected + "\n";
        })
        .catch(error => {
            retorno += " Argh! " + error + "\n";
        });

    console.log('fim');
}
