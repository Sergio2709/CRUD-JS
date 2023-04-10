import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const content = 
        `<td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
                <ul class="table__button-control">
                    <li>
                        <a
                            href="../screens/editar_cliente.html?id=${id}"
                            class="simple-button simple-button--edit"
                        >Editar</a
                    >
                    </li>
                    <li>
                        <button
                            class="simple-button simple-button--delete"
                            type="button"
                            id= "${id}">
                            Eliminar
                        </button>
                    </li>
                </ul>
            </td>`;
    linea.innerHTML = content;
    const btn = linea.querySelector("button")
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices.eliminarCliente(id).then(respuesta => {
            console.log(respuesta);
        }).catch((err) => alert("ocurrio un error"));
    });
    return linea;
}

const table = document.querySelector("[data-table]")

clientServices.listaClientes().then((data)=>{
    data.forEach(({nombre, email, id}) => {
        const nuevaLinea = crearNuevaLinea(nombre, email, id);
        table.appendChild(nuevaLinea);
    });
});

clientServices.listaClientes().catch((error)=> alert("ocurrio un error"));

