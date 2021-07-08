const Cursos =() =>{
    const view =`
    
  <main>
  <div class="album py-5 bg-light">
      <div class="container-cursos">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          <div class="col">
            <div class="card-group">
              <img  src="assets/img/html.jpg" class="img-cursos" alt="">
              <h3 class="card-title">Html 5</h3>
              <p>HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia presentación de una página web (CSS) o la funcionalidad comportamiento (JavaScript).<br>
                "Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la «World Wide Web» (Red Informática Mundial).</p>
                <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
          <div class="col">
            <div class="card-group">
              <img src="assets/img/css3.jpg" class="img-cursos" alt="">
              <h3 class="card-title">Css 3</h3>
              <p> CSS significa Cascade Style Sheets, también llamado Hojas de Estilo en Cascada. CSS es un lenguaje de marcado que se emplea para dar formato a un sitio web. Es decir, funciona en conjunto con los archivos HTML. Por esta razón, para crear un sitio web debes saber tanto HTML como CSS.<br>
                Cabe agregar que el lenguaje CSS3 se puede aplicar en la misma hoja en la que estás desarrollando un documento HTML, pero por motivos de productividad se suele realizar en un documento aparte con la extensión .css. Este documento se puede vincular a cada página HTML que conforme el sitio web, es por ello que es más útil realizar los estilos por separado.</p>
                <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
          <div class="col">
            <div class="card-group">
              <img src="assets/img/javascript.jpg" class="img-cursos" alt="">
              <h3 class="card-title">JavaScript</h3>
              <p> JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat. JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).</p>
                <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
          <div class="col">
            <div class="card-group">
              <img src="assets/img/php.png" class="img-cursos" alt="">
              <h3 class="card-title">Php</h3>
              <p>PHP (acrónimo recursivo de PHP: Hypertext Preprocessor) es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML.<br>
                En lugar de usar muchos comandos para mostrar HTML (como en C o en Perl), las páginas de PHP contienen HTML con código incrustado que hace "algo" (en este caso, mostrar "¡Hola, soy un script de PHP!). El código de PHP está encerrado entre las etiquetas especiales de comienzo y final <?php y ?> que permiten entrar y salir del "modo PHP".<br>
                Lo que distingue a PHP de algo del lado del cliente como Javascript es que el código es ejecutado en el servidor, generando HTML y enviándolo al cliente..</p>
                <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
          <div class="col">
            <div class="card-group">
              <img src="assets/img/sql.png" class="img-cursos" alt="">
              <h3 class="card-title">Sql</h3>
              <p>El Lenguaje de Consulta Estructurado popularmente conocido por sus siglas en inglés como SQL, es un tipo de lenguaje de programación que ayuda a solucionar problemas específicos o relacionados con la definición, manipulación e integridad de la información representada por los datos que se almacenan en las bases de datos.<br>
                Algunos aspectos de SQL están basados en el cálculo relacional, algunos en el álgebra relacional que provienen del modelo relacional y otros a ninguno de los dos sino que son parte de SQL.<br>
                Debido a que SQL ofrece una implementación para los sistemas de bases de datos relacionales es de esperar que posea características parecidas a las mencionadas para el modelo relacional.<br></p>
                <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
          <div class="col">
            <div class="card-group">
              <img src="assets/img/python.png"class="img-cursos" alt="">
              <h3 class="card-title">Python</h3>
              <p>Python es un lenguaje de programación interpretado, multiparadigma y multiplataforma usado, principalmente, en Big Data, AI (Inteligencia Artificial), Data Science, frameworks de pruebas y desarrollo web. Esto lo convierte en un lenguaje de propósito general de gran nivel debido a su extensa biblioteca, cuya colección ofrece una amplia gama de instalaciones.<br>
                El lenguaje Python se caracteriza por ser simple, rápido y tener una curva de aprendizaje amigable y corta. Está desarrollado bajo una licencia de código abierto, por lo que es de libre uso y distribución.<br>
                Además, Python es de tipado dinámico (cuando una variable puede tomar valores de distinto tipo o adaptarse a lo que escribimos) y se puede usar como un lenguaje de extensión para aplicaciones que necesitan una interfaz programable.
              </p>
              <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
          <div class="col">
            <div class="card-group">
              <img src="assets/img/git.jpg" class="img-cursos" alt="">
              <h3 class="card-title">Git</h3>
              <p>Git es un sistema de control de versiones distribuido de código abierto y gratuito diseñado para manejar todo, desde proyectos pequeños a muy grandes, con velocidad y eficiencia.<br>

                Git es fácil de aprender y ocupa poco espacio con un rendimiento increíblemente rápido. Supera a las herramientas SCM como Subversion, CVS, Perforce y ClearCase con características como bifurcaciones locales económicas, áreas de preparación convenientes y múltiples flujos de trabajo.<br>
                La característica de Git que realmente lo distingue de casi todos los demás SCM es su modelo de ramificación.<br>
                Git te permite y te anima a tener múltiples sucursales locales que pueden ser completamente independientes entre sí. La creación, fusión y eliminación de esas líneas de desarrollo lleva unos segundos.                    
                </p>
                <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
          <div class="col">
            <div class="card-group">
                <img src="assets/img/c.png" class="img-cursos" alt="">
                <h3 class="card-title">C# </h3>
                <p>C# (léase C Sharp), es una evolución que Microsoft realizó de este lenguaje, tomando lo mejor de los lenguajes C y C++, y ha continuado añadiéndole funcionalidades, tomando de otros lenguajes, como java, algo de su sintaxis evolucionada. Lo orientó a objetos para toda su plataforma NET (tanto Framework como Core), y con el tiempo adaptó las facilidades de la creación de código que tenía otro de sus lenguajes más populares, Visual Basic, haciéndolo tan polivalente y fácil de aprender como éste, sin perder ni un ápice de la potencia original de C. En la versión de .NET Core, se ha reconstruido por completo su compilador, haciendo las aplicaciones un 600% más rápidas.</p>
                <button type="button" class="btn btn-info">Ir al curso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </main>  
`;
    return view;
}

export default Cursos;