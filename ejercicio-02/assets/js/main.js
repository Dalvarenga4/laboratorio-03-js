
const plus = (/*recibe*/) => {
    //Code
};
const subtract = (/*recibe*/) =>{
    //Code
} ;
const multiply = (/*recibe*/) =>{
    //Code
} ;
const split = (/*recibe*/) => {
    //Code
};
const requestNumber = (/*recibe*/) => {
    const num1 = prompt("Ingrese su primer dato");
    const num2 = prompt("Ingrese su segundo dato");

    if (isNaN(num1) || num1.trim === "" || isNaN(num2) || num2.trim === "")
    {
        alert("Error: los datos deben ser unicamente numéricos");
    }

};

const selectOperation = () => {
    //Code
};

const main = () => {
    requestNumber();
    selectOperation();
}

main();
