const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('================='.green);
    console.log(`== Tabla de ${base} ==`.green);
    console.log('================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) reject(`La base introducida ${base} no es un número`);
        else if (!Number(limite)) reject(`El límite introducido ${limite} no es un número`);
        else {
            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }
            resolve(data);
        }
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) reject(`La base introducida ${base} no es un número`);
        else if (!Number(limite)) reject(`El límite introducido ${limite} no es un número`);
        else {
            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }

            fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
                if (err) reject(err);
                else
                    resolve(`tabla-${base}.txt`);
            });
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}