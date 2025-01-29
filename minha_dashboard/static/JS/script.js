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

        const ctx = document.getElementById('faturamento_mensal').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels, //Aqui é para os valor em baixo do gráfico, onde mostra os 12 meses dinamicamente
                datasets: [{
                    label: "Faturamento", //Aqui é o nome do gráfico
                    data: data.data,
                    backgroundColor: (function () {
                        // Usando o gradiente semelhante ao primeiro gráfico
                        const gradient = ctx.createLinearGradient(0, 25, 0, 300);
                        gradient.addColorStop(0, '#3563E9');  // cor do roxo, correspondente a primeira cor do grafico 1
                        gradient.addColorStop(1, 'rgba(243, 245, 247, 0.1)');  // terceira cor do grafico 1
                        return gradient;
                    })(),
                    borderColor: '#3563E9', // cor de borda no gráfico
                    borderWidth: 2, // espessura da borda
                    pointBackgroundColor: '#3563E9', // cor de cada ponto
                    pointRadius: 3, // raio de cada ponto
                    fill: true,
                    lineTension: 0,
                }]
            },
            options: {
                layout: {
                    padding: 10
                },
                responsive: true,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            padding: 10,
                            autoSkip: false,
                            maxRotation: 15,
                            minRotation: 15
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Faturamento em R$",
                            padding: 10
                        },
                        gridLines: {
                            display: true,
                            color: 'rgba(80, 102, 120, 0.25)'
                        },
                        ticks: {
                            beginAtZero: false,
                            max: 6000,
                            min: 0,
                            padding: 10
                        }
                    }]
                }
            }
        })
    })
}