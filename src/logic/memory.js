class Memory {
    constructor(value = '') {
        this.value = value;
    }

    getMemory() { return this.value; }
    toArray() { return this.value.split(''); }
}

export default Memory;