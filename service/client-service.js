const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const content = 
        `<td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
                <ul class="table__button-control">
                    <li>
                        <a
                            href="../screens/editar_cliente.html"
                            class="simple-button simple-button--edit"
                        >Editar</a
                    >
                    </li>
                    <li>
                        <button
                            class="simple-button simple-button--delete"
                            type="button"
                            >
                            Eliminar
                        </button>
                    </li>
                </ul>
            </td>`;
    linea.innerHTML = content;
    return linea;
}

const table = document.querySelector("[data-table]")

//abrir http (metodo, url)
//CRUD - metodo http (Create - post , read - get , update - put/patch , delete - delete )

const listaClientes = () => 
    fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

listaClientes().then((data)=>{
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        console.log(nuevaLinea);
        table.appendChild(nuevaLinea);
    });
});

listaClientes().catch((error)=> alert("ocurrio un error"));


/*  const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET","http://localhost:3000/perfil")
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400){
                reject(response);
            } else {
                resolve(response);
            }
        };
    })
    return promise
}*/