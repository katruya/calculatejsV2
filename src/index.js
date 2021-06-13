'use strict';
import Render from "./utils/Render.js";
import listener from "./logic/events.js";

(function () {
    Render();
    listener(); // listen for events
})();

