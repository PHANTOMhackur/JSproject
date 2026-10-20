const message: string = "Hello, World!";

console.log(message);

if (typeof window !== "undefined") {
    alert(message);
    const output = document.getElementById("output");
    if (output) {
        output.innerHTML = message;
    }
}

export {};
