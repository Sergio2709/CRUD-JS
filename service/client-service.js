const listaClientes = () => 
    fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

const crearClientes = (nombre, email) =>{
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({nombre,email,id: uuid.v4()})
    });
};

export const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};

export const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};

export const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ nombre, email }),
    })
    .then (respuesta => respuesta)
    .catch ((err)=> console.log("error"))
}

export const clientServices = {
    listaClientes,
    crearClientes,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};


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