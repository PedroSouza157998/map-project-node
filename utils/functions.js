function dist(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

function permutator(inputArr) {
    let result = [];
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }
    permute(inputArr);
    return result;
}

function menorCaminho(pontos) {
    let melhorDistancia = Infinity;
    let melhorCaminho = null;
    let permutacoes = permutator(pontos.slice(1));

    for (let i = 0; i < permutacoes.length; i++) {
        let caminho = [pontos[0], ...permutacoes[i], pontos[0]];
        let distanciaTotal = 0;

        for (let j = 0; j < caminho.length - 1; j++) {
            distanciaTotal += dist(caminho[j], caminho[j + 1]);
        }

        if (distanciaTotal < melhorDistancia) {
            melhorDistancia = distanciaTotal;
            melhorCaminho = caminho;
        }
    }

    return melhorCaminho;
}

module.exports = {menorCaminho}