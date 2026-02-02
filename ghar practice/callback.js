function calculator(a, b, sumcallback) {
    sumcallback(a, b);
}

calculator(1, 2, (a, b) => {
    console.log(a + b);
});