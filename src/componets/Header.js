

const Header =() =>{
    const view =`
    <header>
    <section>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="assets/img/logo.png" alt="" width="30" height="30">
            </a>
          <a class="navbar-brand" href="#">ClassCode</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link disabled" aria-current="page" href="/"><i class="bi bi-house">Inicio</i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/cursos"><i class="bi bi-journal-code">Cursos</i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/libros"><i class="bi bi-book">Libros</i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/contactos"><i class="bi bi-person">Contacto</i></a>
              </li>
            </ul>
            <form class="d-flex">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-search"></i></span><input class="form-control me-2" type="search" placeholder="¿Que deseas buscar?" aria-label="Search">
              </div>
              <button class="btn btn-outline-dark" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </section>
    <div class="jumbotron jumbotron-fluid text-center text-white">
      <section>
        <h1 class="main-title">Los mejores productos de la red</h1>
        <p>programo, luego existo...</p>

      </section>  
    </section>
    </header>`;
    return view;
}

export default Header;