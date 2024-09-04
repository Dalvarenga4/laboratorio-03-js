const calculateFactorial = (number) => {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
};

const requestNumber = () => {
    let num;
    while (true) {
        num = prompt("Introduce un número entero no negativo para calcular su factorial:");
        if (num === null) {
            alert("Operación cancelada.");
            return null;
        } else if (isNaN(num) || num.trim() === "" || !Number.isInteger(Number(num)) || num < 0) {
            alert("Por favor, introduce un número entero no negativo válido.");
        } else {
            return Number(num);
        }
    }
};

const main = () => {
    const num = requestNumber();
    if (num !== null) {
        const result = calculateFactorial(num);
        alert(`El factorial de ${num} (iterativo) es: ${result}`);
    }
};

main();
