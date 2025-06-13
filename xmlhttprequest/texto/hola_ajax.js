function solicitud(){
    let ajax = new XMLHttpRequest;
    ajax.onload = function(){
        document.getElementById("mostrar").innerHTML=this.responseText;
    }
    ajax.open("get","hola.txt",true);
    ajax.send();
}