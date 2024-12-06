// Fibonacci calculation in the worker
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

self.addEventListener("message", (e) => {
    const startTime = performance.now();
    const result = fibonacci(e.data);
    const endTime = performance.now();

    self.postMessage({
        value: result,
        duration: endTime - startTime,
    });
});
