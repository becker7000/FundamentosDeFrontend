
function peticion(){

    $.ajax("archivo.txt",{
        
        success(text){
            document.getElementById("mostrar").innerHTML=text;
        },
        error(error){
            document.getElementById("mostrar").innerHTML=text;
        }

    });

}