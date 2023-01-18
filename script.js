let datosObtenidos;
let texto;
let TextoEncriptado;
let Textcopiado;
function ocultar(){
    let text=document.getElementById("text");
    text.style.display="none";
    let noEncontrado=document.getElementById("no-text");
    noEncontrado.style.display="inline"
}
function mostrar(){
    let text=document.getElementById("text");
    text.style.display="inline-block";
    let noEncontrado=document.getElementById("no-text");
    noEncontrado.style.display="none"
}
function copiado(){
    if(texto==Textcopiado){
        document.getElementById("Copy").value="Copiado";
    } else if(texto!==Textcopiado){
        document.getElementById("Copy").value="Copiar";
    }
}
function getData(){
    texto=document.getElementById("IngreseTexto").value;
    mostrar();
    copiado();
    /*document.getElementById("Textarea").value=texto;*/
}
function encriptar(){
    getData();
    if (texto<=0){
        ocultar();
    }
    texto=texto.replace(/e/ig,'enter');
    texto=texto.replace(/i/ig,'imes');
    texto=texto.replace(/a/ig,'ai');   
    texto=texto.replace(/o/ig,'ober');
    texto=texto.replace(/u/ig,'ufat');
    document.getElementById("Textarea").value=texto;
}
function desencriptar(){
    getData();
    copiado();
    if (texto<=0){
        ocultar();
    }
    texto=texto.replace(/ai/ig,'a');
    texto=texto.replace(/enter/ig,'e');
    texto=texto.replace(/imes/ig,'i');
    texto=texto.replace(/ober/ig,'o');
    texto=texto.replace(/ufat/ig,'u');
    document.getElementById("Textarea").value=texto;
}
function copiar(){
    navigator.clipboard.writeText(texto);
    Textcopiado=texto;
    copiado();
}
document.getElementById("BotonEncriptar").onclick=encriptar;
document.getElementById("BotonDesencriptar").onclick=desencriptar;
document.getElementById("Copy").onclick=copiar;
