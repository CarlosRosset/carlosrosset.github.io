function bluetooth() {

    var retorno = document.getElementById('retorno');

    let options = {};
    options.acceptAllDevices = true;  
       
    navigator.bluetooth.requestDevice(options)
        .then(device =>  {
            const isConectado = device.gatt.connected;
            if (!isConectado){
                // tentar conectar
                retorno.innerHTML = 'Tentar conectar';
            } else {
                // Esta já conectado
                retorno.innerHTML = 'Já conectado';
            }


            // if (!device.gatt.connect()) {
            //     console.log('Device não conectado');
            //     return device.gatt.connect();
            //     console.log('Conectado');
            // }
            // else {
            //     console.log('Teste')
            // }
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
