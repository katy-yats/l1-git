function dotsCalculator(string) {
    let [a, operation, b] = string.split(" ");
    a = a.split("").length;
    b = b.split("").length;

    const operations = { 
        "+": a + b,
        "-": a - b,
        "*": a * b,
    }

    return ".".repeat(operations[operation]).length;
}