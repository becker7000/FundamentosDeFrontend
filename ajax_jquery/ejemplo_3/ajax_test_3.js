
$.ajax("https://randomuser.me/api?results=20",{

    success(json){

        // Primero ocultamos la tabla:
        $("table").hide();

        $("table").append(
            $("<thead></thead>").html(
                `
                    <th>Title</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Picture</th>
                `
            )
        )

        for(let user of json.results){
            /* console.log("Title: %s",user.name.title);
               console.log("Name: %s",user.name.first);
               console.log("Phone: %s",user.phone);
               console.log("Age: %d",user.dob.age);*/

            $("#tbody").append(
                $("<tr></tr>").html(
                    `
                        <td>${user.name.title}</td>
                        <td>${user.name.firt}</td>
                        <td>${user.phone}</td>
                        <td>${user.dob.age}</td>
                        <td><img src="${user.picture.medium}" alt="user"></td>        
                    `
                )
            )   
        }
        // Efecto visual
        $("table").fadeIn(2400);
    },
    error(error){
        alert("Error en el consumo de la API");
    }

});