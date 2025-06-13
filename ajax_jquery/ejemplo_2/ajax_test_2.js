
$.ajax("https://randomuser.me/api?results=20",{

    success(json){
        for(let user of json.results){

            // Primero hacer la prueba con este código...
            /* console.log("Title: %s",user.name.title);
               console.log("Name: %s",user.name.first);
               console.log("Phone: %s",user.phone);
               console.log("Age: %d",user.dob.age);*/

            $("#usuarios").append(
                $("<li></li>").html(
                    `
                    <div class="contenedor">
                        <div>
                            <img src="${user.picture.medium}" alt="user">
                            <br>
                        </div>    
                        <div>
                            <span>Title: ${user.name.title}</span>
                            <br>
                            <span>Name: ${user.name.first}</span>
                            <br>
                            <span>Phone: ${user.phone}</span>
                            <br>
                            <span>Age: ${user.dob.age}</span>
                        </div>
                        <hr>
                    </div>
                    `
                )
            )   
        }
    },
    error(error){
        alert("Error en el consumo de la API");
    }

});