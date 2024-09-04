const plus = (num1, num2) => {
    alert(`Resultado de la suma: ${Number(num1) + Number(num2)}`);
};

const subtract = (num1, num2) => {
    alert(`Resultado de la resta: ${Number(num1) - Number(num2)}`);
};

const multiply = (num1, num2) => {
    alert(`Resultado de la multiplicación: ${Number(num1) * Number(num2)}`);
};

const split = (num1, num2) => {
    if (num2 == 0) {
        alert("La operación es indeterminada (división por cero).");
    } else {
        alert(`Resultado de la división: ${Number(num1) / Number(num2)}`);
    }
};

const requestNumber = () => {
    let num1, num2;
    while (true) {
        num1 = prompt("Ingrese su primer dato:");
        num2 = prompt("Ingrese su segundo dato:");

        if (isNaN(num1) || num1.trim() === "" || isNaN(num2) || num2.trim() === "" || num1 === null || num2 === null) {
            alert("Error: los datos deben ser válidos.");
        } else {
            return [num1, num2]; 
        }
    }
};

const selectOperation = (num1, num2) => {
    let op;
    while (true) {
        op = prompt("Introduce una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");

        switch (parseInt(op)) {
            case 1:
                plus(num1, num2);
                return; 
            case 2:
                subtract(num1, num2);
                return; 
            case 3:
                multiply(num1, num2);
                return; 
            case 4:
                split(num1, num2);
                return;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
};

const main = () => {
    const [num1, num2] = requestNumber(); 
    selectOperation(num1, num2); 
};

main();
