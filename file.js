// TAREA INTEGRAL - PARTE 1
 /***********************************************
 * 
 * 1. Hacer una función que guarde una persona
 *    en una lista de listas de datos de personas.
 *    Es decir, una lista con varias listas adentro.
 *    Deberia guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 
 ************************************************/

//Solución sin callbacks
let userList = [["Meri Laclau", "34", "merilaclau@gmail.com"], ["Juan Dans", "23", "juandans@gmail.com"]];
let newUser = [];

const getNewUser = () => {
    newUser[0] = prompt("Ingresá tu nombre y apellido");
    newUser[1] = prompt("Ingresá tu edad");
    newUser[2] = prompt("Ingresá tu correo electrónico");
    isNewUser();
}

const isNewUser = () => {
    let contador = 0;
    for (let i = 0; i < userList.length; i++) {
        contador = 0;
        for (let j = 0; j < userList[i].length; j++) {
            if (userList[i][j] == newUser[j]) {
                contador++   
            }
        }
        if (contador == 3) {
            i = 4;
            alert("Los datos ingresados corresponden a une usuarie existente. No es necesario que vuelvas a registrarte.");     
        }                
    }
    if (contador < 3) {
        userList.push(newUser);
    }  
}

const displayUserList = () => console.log(userList);

getNewUser();
displayUserList();

//Solución con callbacks
let userList = [["Meri Laclau", "34", "merilaclau@gmail.com"], ["Juan Dans", "23", "juandans@gmail.com"]];
let newUser = [];

const getNewUser = () => {
    newUser.push(prompt("Ingresá tu nombre y apellido"));
    newUser.push(prompt("Ingresá tu edad"));
    newUser.push(prompt("Ingresá tu correo electrónico"));
    isNewUser();
}

const isNewUser = () => {
    const existentUser = userList.find(user => {
        return user.every(i => newUser.includes(i));
    })
    existentUser ? alert("Los datos ingresados corresponden a une usuarie existente. No es necesario que vuelvas a registrarte.") : userList.push(newUser);
}

const displayUserList = () => console.log(userList);

getNewUser();
displayUserList();