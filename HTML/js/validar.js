
function validar() {
    var nombre, apellido, provincia, localidad, correo, telefono, asunto, mensaje, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("nombre").value;
    provincia = document.getElementById("nombre").value;
    localidad = document.getElementById("nombre").value;
    correo = document.getElementById("nombre").value;
    telefono = document.getElementById("nombre").value;
    asunto = document.getElementById("nombre").value;
    mensaje = document.getElementById("nombre").value;

    expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre === "" || apellido === ""  || provincia === "" || localidad === "" ||
    correo === "" || telefono === "" || asunto === "" || mensaje === ""){
        alert("El campo Nombre esta vacio");
        return false;
    }
    else if (nombre.lenght >50) {
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellido.lenght >80) {
        alert("El apellido es muy largo");
    }
    else if (!expresion.test(correo)) {
        alert("El correo no es valido");
        return false;
    }
}

function validar_2() {
    var nombre, apellido, provincia, localidad, correo, telefono, asunto, mensaje, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("nombre").value;
    provincia = document.getElementById("nombre").value;
    localidad = document.getElementById("nombre").value;
    correo = document.getElementById("nombre").value;
    telefono = document.getElementById("nombre").value;
    

    expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre === "" || apellido === ""  || provincia === "" || localidad === "" ||
    correo === "" || telefono === "" || asunto === "" || mensaje === ""){
        alert("El campo Nombre esta vacio");
        return false;
    }
    else if (nombre.lenght >50) {
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellido.lenght >80) {
        alert("El apellido es muy largo");
    }
    else if (!expresion.test(correo)) {
        alert("El correo no es valido");
        return false;
    }
}