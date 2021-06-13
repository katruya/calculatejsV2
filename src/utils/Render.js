import App from "../views/App.js";

const Render = function () {
    let app = document.getElementById('app');
    app.innerHTML = App(); // load app into DOM

    console.log(app.innerHTML); // debugging

}

export default Render;
