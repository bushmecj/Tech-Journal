function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    const result = fibonacci(num - 1) + fibonacci(num - 2);
    return result;
}

console.log(fibonacci(5));