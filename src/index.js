import "./css/styles.css"

import router from "./routes";

window.addEventListener("load", router);
window.addEventListener('hashchange', router);
console.log("Single Page Application");
