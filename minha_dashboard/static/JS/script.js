//função que renderiza o valor total, que nada mais que colocar o URL /retorna_total_vendido no HTML dinamicamente
function renderiza_total_vendido(url){
    fetch(url, { //fetch faz uma requisição para url total_vendido, que foi criado em Python e está na urls.py
        method: 'get',
    }).then(function(result){ //pego o que o url informou e transformo para json, o fecth trabalha com promessas, e os then são as promessas que o fetch envia
        return result.json()
    }).then(function(data){ //recebe data, que o json convertido na promessa anterior
        document.getElementById('faturamento_total').innerHTML = data.total
    })

}

function renderiza_faturamento_mensal(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){

        const ctx = document.getElementById('faturamento_mensal'). getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels, //Aqui é para os valor em baixo do grafico, onde mostra os 12 meses dinamicamente
                datasets: [{
                    label: "Faturamento", //Aqui é o nome do grafico
                    data: data.data,
                    backgroundColor: (`rgba(106, 90, 205, 0.2)`),
                    borderColor: (`rgba(72, 61, 139, 1)`),
                    borderWidth: 1
                }]
            },
        })
    })
}