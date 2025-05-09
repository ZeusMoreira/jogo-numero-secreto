import mostrarNumeroDito from "./exibirNumeroDito.js"

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

var recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)	

recognition.addEventListener('end', restart);

function restart() {
    recognition.start();
}
  
function onSpeak(e) {
    let numeroDito = e.results[0][0].transcript
    mostrarNumeroDito(numeroDito)
}

export default function pararJogo() {
    recognition.removeEventListener('end', restart);
    recognition.stop()
}