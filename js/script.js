function fale(mensagem) {
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult
    // https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS/Manifest

    // window.speechSynthesis.speak(new SpeechSynthesisUtterance(mensagem));
};

function teste_01() {
    // Define um elemento de Saida para as mensagens
    var $target = document.getElementById('msgsaida');

    // Testa se existe suporte "bluetooth" no "navigator"
    if (!('bluetooth' in navigator)) {
        $target.innerText = 'API Bluetooth - SEM Suporte.';
        return;
    }
    // Se não tem suporte jamais chegará neste ponto defido ao "return"

    navigator.bluetooth.requestDevice();
}

function teste_02() {
    console.log('teste 02');
}

function forceResetApp() {
    //----
    caches.keys().then(keys => Promise.all(
        keys.map(key => {
            console.log(key);
            return caches.delete(key);
        })
    )).then(() => {
        console.log('Vamos para a nova versão');
        location.reload();
    })
    //----


}

    function testarBluetooth() {
        let filters = [];

        let filterService = document.getElementById('service').value;
        if (filterService.startsWith('0x')) {
            filterService = parseInt(filterService);
        }
        if (filterService) {
            filters.push({ services: [filterService] });
        }

        let filterName = document.getElementById('name').value;
        if (filterName) {
            filters.push({ name: filterName });
        }

        let filterNamePrefix = document.getElementById('namePrefix').value;
        if (filterNamePrefix) {
            filters.push({ namePrefix: filterNamePrefix });
        }

        let options = {};
        if (document.getElementById('allDevices').checked) {
            options.acceptAllDevices = true;
        } else {
            options.filters = filters;
        }

        var $objlog = document.getElementById('log');
        let log = '';
        

        log = log + "<ion-item><ion-label>Requesting Bluetooth Device...</ion-label></ion-item>";
        log = log + "<ion-item><ion-label>with "+ JSON.stringify(options) +"</ion-label></ion-item>";

        navigator.bluetooth.requestDevice(options)
            .then(device => {
                log = log + "<ion-item><ion-label>Name: "+ device.name +"</ion-label></ion-item>";
                log = log + "<ion-item><ion-label>Id: "+ device.id +"</ion-label></ion-item>";
                log = log + "<ion-item><ion-label>Connected: "+ device.gatt.connected +"</ion-label></ion-item>";
            })
            .catch(error => {
                log = log + "<ion-item><ion-label>Argh! " + error +"</ion-label></ion-item>";
            });

        $objlog.innerText = log;  
        console.log('funcionou tudo 2');
    }
