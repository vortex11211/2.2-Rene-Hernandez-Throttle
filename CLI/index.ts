import readline from 'readline';
import { throttleFunction } from '../src/throttle'  ; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function showMessage(message: string) {
    console.log(message);
}

const throttledShowMessage = throttleFunction(showMessage, 5000);


function askAndShowMessage() {
    rl.question('Introduce un mensaje para mostrar (throttled): ', (answer) => {
        throttledShowMessage(answer);
        askAndShowMessage(); 
    });
}


console.log('Bienvenido al CLI Throttled!');
askAndShowMessage();


rl.on('SIGINT', () => {
    console.log('\nSaliendo del CLI...');
    rl.close();  
    process.exit(0);  
});