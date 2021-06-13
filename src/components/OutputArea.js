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
        <div class="row">
            <div class="col">
                <h4 id="x-out">X = </h4>
            </div>
            <div class="col">
                <h4 id="y-out">Y = </h4>
            </div>
            <div class="col">
                <h4 id="z-out">Z = </h4>
        </div>
    `;
}

export default OutputArea;