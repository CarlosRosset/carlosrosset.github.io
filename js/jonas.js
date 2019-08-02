function bluetooth() {

    var retorno = document.getElementById('retorno');

    let options = {};
    options.acceptAllDevices = true;  
       
    navigator.bluetooth.requestDevice(options)
        .then(device =>  {
            if (!device.gatt.connect()) {
                return device.gatt.connect()
            }
            else {
                console.log('Teste')
            }
        //    retorno.innerHTML = " device ", device;
        //    retorno.innerHTML += " Name: " + device.name + "<br>";
        //    retorno.innerHTML += " Id: " + device.id + "<br>";
        //    retorno.innerHTML += " Connected: " + device.gatt.connected + "<br>";
        //    retorno.innerHTML += " Objeto: " + device.options;
        })
        .catch(error => {
            retorno.innerHTML += " Argh! " + error + "<br>";
        });

    console.log('fim');
}
