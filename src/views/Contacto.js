

const Contactos =() =>{
    const view =`
    <main class="main-contacto">
     <h1 class="mx-auto" style="width: 200px;">Contacto</h1>
     <p class="mx-4">Por favor puede ingresar sus datos para comunicarnos con usted</p>
     <form action="/contactogracias.html" class="main-form">
       <div class="mb-3">
        <label for="nombre" class="form-label">* Nombre(s)</label>
        <input type="text" name="nombre" id="nombre" class="form-control" placeholder="Digite aqui su nombre" required>
       </div>
       <div class="mb-3">
        <label for="apellido" class="form-label">* Apellido(s)</label>
        <input type="text" name="apellido" id="apellido" class="form-control" placeholder="Digite aqui su(s) apellido(s)" required>
       </div>
       <div class="mb-3">
        <label for="mail" class="form-label">* Correo electronico</label>
        <input type="email" name="mail" id="mail" class="form-control" placeholder="Digite aqui su correo electronico" required>
       </div>
       <div class="mb-3">
        <label for="comentario" class="form-label">Comentario</label>
        <textarea id="comentario" class="form-control" placeholder="Digite aqui su comentario" cols="30" rows="5"></textarea>
       </div>
       <input type="submit" name="enviar" value="Enviar datos" class="btn mx-3">
     </form>
    </main>
`;
    return view;
}

export default Contactos;