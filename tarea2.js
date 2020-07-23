function capturar () {
    var patron=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    var valor= document.getElementById("email").value;
    if(patron.test(valor))

{
    alert("email es correcto");
}
else{
    alert("email es icorrecto");
}

}

function capturar () {
    var patron =/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    var valor = document.getElementById("password").value;
    if(patron.test(valor))

{
    alert("contraseña correcta");
}
else{
    alert("la contraseña debe tener una al menos una letra mayuscula minuscula un caracter especial y un numero");
}

}


/*para validar una contraseña
^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$

 una tipo de captura en la consola sin enviar....
const nombre = document. getElementById("nombre");
const apellido = document. getElementById("apellido");
const email = document. getElementById("email");
const password = document. getElementById("password");
const form= document. getElementById("form");

function capturar() {
   // console.log("capturado");
    var Usuario { nombre, apellido, email, direccion, edad, ocupacion, telefono 
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.direccion = direccion;
            this.edad = edad;
            this.ocupacion = ocupacion;
            this.telefono = telefono;
        
    }
}
    var nombreCapturar= document. getElementById("nombre").value;
    // console.log(nombreCapturar);
    var apellidoCapturar= document. getElementById("apellido").value;
   // console.log(apellidoCapturar);
    var emailCapturar= document. getElementById("email").value;
    var direccionCapturar= document. getElementById("direccion").value;
    var edadCapturar= document. getElementById("edad").value;
    var ocupacionCapturar= document. getElementById("ocupacion").value;
   // console.log(ocupacionCapturar);
    var telefonoCapturar= document. getElementById("telefono").value;

*/
 /*const  validatePasswordModerate  =  ( contraseña )  =>  {
    // Debe tener 1 letra minúscula, 1 letra mayúscula, 1 número y tener al menos 8 caracteres de longitud
    const  passwordRegex  =  / (? = ( . * [ 0-9 ] ) ) ( (? = . * [ A-Za-z0-9 ] ) (? = . * [ AZ ] ) (? = . * [ az ] ) ) ^ . { 10-20 } $ /
    consola  ( passwordRegex . test ( password) )  . log ( 'contraseña válida' )
    consola . log ( 'contraseña incorrecta' )

captura el nombre estatico desde js con consola
var usuario= { nombre:"juan",email:"juan@gu.nt",direccion:"carrera",edad:25,ocupacion:"obrero",telefono:3128503208};
console.log(usuario);
 
*/