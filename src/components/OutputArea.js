const OutputArea = function() {
    return `
        <div id="history" class="col">
            <h3 class="text-info">()</h3>
        </div>
        <div class="row">
            <h1 id="out">0</h1>
        </div>
        <div id="mem-out" class="col text-primary">
            <h3>[MEM: ]</h3>
        </div>
        <div id="x-out" class="row">
            <h4>X = </h4>
        </div>
    `;
}

export default OutputArea;