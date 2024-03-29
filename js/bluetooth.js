function bluetooth() {

    var retorno = document.getElementById('retorno');
    var deviceName = document.getElementById('deviceName');
    var deviceId = document.getElementById('deviceId');
    var status = false

    let options = {};
    options.acceptAllDevices = true;  
       
    navigator.bluetooth.requestDevice(options)
        .then(device =>  {
            const isConectado = device.gatt.connected;
            if (!isConectado){
                // tentar conectar
                retorno.innerHTML = 'Tentar conectar: ' + device.name;
                deviceId.innerHTML = device.id;
                deviceName.innerHTML = device.name;
                status = device.gatt.connect;

                if (!device.gatt.connect()) {
                    // Erro ao tentar conectar 
                    retorno.innerHTML = "Erro ao tentar conectar o " + device.name;
                } else {
                    // esta conectado
                    retorno.innerHTML = "Conseguiu conectar ao " + device.name + '\n';
                }

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
