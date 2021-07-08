import Header from "../componets/Header";
import Contactos from "../views/Contacto";
import Cursos from "../views/Cursos";
import Libros from "../views/Libros";
import Home from "../componets/Home";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Error404 from "../views/Error404";

 const routes = {
   '/': Home,
   '/contactos': Contactos,
   '/cursos': Cursos,
   '/libros': Libros,
  // '/work': Error404,
 };
//ROUTER
const router = async () => {
  const header = null || document.getElementById("header");
  header.innerHTML = await Header();
  const home = null || document.getElementById("main");
  home.innerHTML = await Home();
  const main = null || document.getElementById("main");
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  main.innerHTML = await render();
};

export default router;
