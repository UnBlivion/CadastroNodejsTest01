const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];
const fs = require("fs");
const arquivo = "cadastros.json";

let cadastros = {};

fs.readFile(arquivo, (err, dados) => {

    if (!err) {
        let dadosString = dados.toString();
        cadastros = JSON.parse(dadosString);
    }

    if (comando === "salvar") {
            salvar();
/*
        if ((!nome) || (!email)) {
            console.log("Digite um nome e/ou email")
        }
        else if (nome === "omaewa" && email === "mou@shindeiru") {
            console.log("NANI!!!!!");
            cadastros[nome] = email;

            let dados = JSON.stringify(cadastros);

            fs.writeFile("cadastros.json", dados, (err) => {
                if (err) {
                    console.log("Deu Ruim");
                }
                else {
                    console.log("Salvo Com sucesso");
                }
            });
        }
        else {
            cadastros[nome] = email;

            let dados = JSON.stringify(cadastros);

            fs.writeFile("cadastros.json", dados, (err) => {
                if (err) {
                    console.log("Deu Ruim");
                }
                else {
                    console.log("Salvo Com sucesso");
                }
            });
        }  */
    }

    else if (comando === "buscar") {
        buscar();
/*
        if ((cadastros[nome]) === undefined) {
            console.log("Nome não existe");
        }
        else {
            console.log(`E-mail: ${cadastros[nome]}`);
        }*/
    }

    else if (comando === "buscar-todos") {
        console.log(cadastros);
    }

    else {
        console.log("sintaxe: node index.js <comando> <nome> <email>");
    }
})


function salvar(){
    if ((!nome) || (!email)) {
            console.log("Digite um nome e/ou email")
        }
        else if (nome === "omaewa" && email === "mou@shindeiru") {
            console.log("NANI!!!!!");
            cadastros[nome] = email;

            let dados = JSON.stringify(cadastros);

            fs.writeFile("cadastros.json", dados, (err) => {
                if (err) {
                    console.log("Deu Ruim");
                }
                else {
                    console.log("Salvo Com sucesso");
                }
            });
        }
        else {
            cadastros[nome] = email;

            let dados = JSON.stringify(cadastros);

            fs.writeFile("cadastros.json", dados, (err) => {
                if (err) {
                    console.log("Deu Ruim");
                }
                else {
                    console.log("Salvo Com sucesso");
                }
            });
        }
    }


function buscar(){
    if ((cadastros[nome]) === undefined) {
        console.log("Nome não existe");
    }
    else {
        console.log(`E-mail: ${cadastros[nome]}`);
    }
}

/*
console.log(nome);
console.log(comando);
console.log(email);
*/