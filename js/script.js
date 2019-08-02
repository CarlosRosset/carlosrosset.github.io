function fale(mensagem) {
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult
    // https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS/Manifest

    window.speechSynthesis.speak(new SpeechSynthesisUtterance(mensagem));
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

// Acessar


// Testes reconhecer voz



function escutar(){
    try {
        recognizer.start();
    } catch (ex) {
        alert("error: " + ex.message);
    }
}

// Test browser support
window.SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    null;

//caso não suporte esta API DE VOZ                              
if (window.SpeechRecognition === null) {
    document.getElementById('unsupported').classList.remove('hidden');
} else {
    var recognizer = new window.SpeechRecognition();
    // var $nomeFalado = document.getElementById('nomeFalado');
    // Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
    // recognizer.continuous = true
    recognizer.onresult = function (event) {
        // transcription.innerHTML = "";
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                
                var $nome = event.results[i][0].transcript;
                acessar($nome);
                //$nomeFalado.innerText = $nome;
                // console.log($nome);
                // document.getElementById('nomeFalado').innerHTML = $nome;
                // transcription.innerHTML = event.results[i][0].transcript + ' (Taxa de acerto [0/1] : ' + event.results[i][0].confidence + ')';
                // transcription.textContent = event.results[i][0].transcript + ' (Taxa de acerto [0/1] : ' + event.results[i][0].confidence + ')';
            } else {
                // transcription.innerHTML += event.results[i][0].transcript;
            }
        }
    }
    // document.querySelector("#rect").addEventListener("click", function () {
    //     try {
    //         recognizer.start();
    //     } catch (ex) {
    //         alert("error: " + ex.message);
    //     }
    // });
}

function acessar(nome) {
    if(nome === 'Bruno') {
        document.getElementById('nomeFalado').innerHTML = nome; 
        document.getElementById('acoes').classList.remove('hidden');
        window.open('/pages/bluetooth.htm', '_self');
    } else {
        fale('Desculpa, você não é quem eu espero!');
        alert('Desculpa, você não é quem eu espero!');
    }
}
