const countVotes = (votos) => {
    let resultado = {};
    votos.forEach((votos) => {
        resultado[votos.candidate] = (resultado[votos.candidate] || 0) + 1;
    });
    return resultado;
};

const showResults = (resultado) => {
    alert("Resultados de la votación->");
    for (let candidate in resultado) {
        alert(`${candidate}: ${resultado[candidate]} votos`);
    }
};

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];

    const resultados = countVotes(votes);
    showResults(resultados);

}

main();
