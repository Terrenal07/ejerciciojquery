console.log("cargando fichero externo");
function saludar(){
    window.alert("saludando");
}
function probar_let(){
    let i = 0;
    if(i==0) {
        let i = 1; // Sería otra variable i solo para el bloque if
        window.alert("dentro de if " +i); // 1
    }
    window.alert("fuera de if " +i); // 0
}
function gestionar_dom(){
    let texto=document.getElementById("origen").innerText;
    document.getElementById("resultado").innerText=texto;
}
function crear_dom(){
    var parrafo=document.createElement("p");
    parrafo.innerHTML="parrafo nuevo";
    document.body.appendChild(parrafo);
}
function crear_cookie(){
    console.log("creando cookie..")
    document.cookie="ciudad=madrid";
}
function ver_cookie(){
    window.alert(document.cookie);
}