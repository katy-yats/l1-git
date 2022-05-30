function grid(n) {
    if(n < 0) {
        return null;
    } else {
        const range = m => [...Array(m).keys()];
        const alphaRange = (size, phase) => range(size).map(i=>String.fromCharCode((i+phase)%26+97));
        return range(n).map(i=>alphaRange(n,i).join(" ")).join("\n");
    }        
}

console.log(grid(5));
console.log(grid(17));