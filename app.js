const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite).then(data => console.log(data.green)).catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(base, limite).then(archivo => {
            console.log(archivo.blue);
        }).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}