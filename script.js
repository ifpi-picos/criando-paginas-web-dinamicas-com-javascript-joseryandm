const selectEstados = document.getElementById("estados");
const selectCidades = document.getElementById("cidade");
const butaoSalvar = document.getElementById("salvar")

const cidades = {
    PI: ['Picos', 'Teresina', 'Inhuma', 'Parnaíba', 'Oeiras'],
    PE: ['Recife', 'Petrolina', 'Salgueiro'],
    DF: ['Brasília', 'Gama', 'Taguatinga', 'Paranoá']
};

function adicionarOptions(select, options, chosen) {
    select.innerHTML = options.reduce((html, option) => {
        return html + `<option value="${option}">${option}</option>`;
    }, '<option disabled selected value>Escolha...</option>')
}

var estados = Object.keys(cidades);
const estadoInicial = estados[0];
adicionarOptions(selectEstados, estados, estadoInicial);
selectEstados.addEventListener('change', function() {
    adicionarOptions(selectCidades, cidades[this.value]);
});

const select1 = document.getElementById("estados")
select1.addEventListener('change', () => {
    estado = select1.options[select1.selectedIndex].text;
})

const select2 = document.getElementById("cidade")
select2.addEventListener('change', () => {
    cidade = select2.options[select2.selectedIndex].text;
})

butaoSalvar.addEventListener('click', () => {
    alert("UF: " + estado + " - Cidade: " + cidade + ", Salvo com sucesso!");
})