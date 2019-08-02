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
    } else {
        $target.innerText = 'API Bluetooth - COM Suporte.';
        return; 
    }
    // Se não tem suporte jamais chegará neste ponto defido ao "return"
    // navigator.bluetooth.requestDevice();
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

