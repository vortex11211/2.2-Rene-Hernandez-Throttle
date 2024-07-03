

import readline from 'readline';
import { throttleFunction } from '../src/throttle'  ; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function showMessage(message: string) {
    console.log(message);
}

const throttledShowMessage = throttleFunction(showMessage, 2000); // Throttle de 2 segundos (2000 ms)

// Función para preguntar al usuario y mostrar el mensaje throttled
function askAndShowMessage() {
    rl.question('Introduce un mensaje para mostrar (throttled): ', (answer) => {
        throttledShowMessage(answer);
        askAndShowMessage(); // Volver a preguntar recursivamente
    });
}

// Iniciar el proceso preguntando y mostrando mensajes
console.log('Bienvenido al CLI Throttled!');
askAndShowMessage();

// Manejar Ctrl+C para salir graciosamente
rl.on('SIGINT', () => {
    rl.question('\n¿Seguro que quieres salir? (presiona Ctrl+C de nuevo para salir)\n', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
});