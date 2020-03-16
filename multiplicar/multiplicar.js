// Require
const fs = require('fs');
//const fs = require('express'); no nativos de node, pero expanciones
//const fs = require('./fs'); //require de archivos que nosotros escribimos
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';
        for (let i = 0; i < limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;
        }
        resolve(data);
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tablas-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tablas-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = { crearArchivo, listarTabla }