from django.shortcuts import render
from .models import Vendas
from datetime import datetime, timedelta
from django.http import JsonResponse
from django.db.models import Sum
from logging import CRITICAL, ERROR, WARNING, INFO, DEBUG
from logging import basicConfig
from logging import critical, error, warning, info, debug

basicConfig(
    level=INFO,
    filename='logs.log',
    filemode='a',
    format='%(levelname)s|%(asctime)s|%(message)s'
)

def home(request):
    info('HTML_Carregado')
    return render(request, 'home.html')


def alugueis(request):
    return render(request, 'alugueis.html')


def retorna_total_vendido(request):
    total = Vendas.objects.all().aggregate(Sum('total'))['total__sum']
    return JsonResponse({'total' : total})

# Função que analisa o faturamento diário do mês atual
def relatorio_faturamento_mensal(request):
    x = Vendas.objects.all()

    # Identifica o mês e o ano atual
    hoje = datetime.now()
    ano_atual = hoje.year

    # Calcula o número de dias no mês atual
    ultimo_dia = (datetime(ano_atual,  + 1, 1) - timedelta(days=1)).day

    data = []
    labels = []

    # Loop por cada dia do mês
    for dia in range(1, ultimo_dia + 1):
        faturamento_dia = sum(
            i.total for i in x if i.data.day == dia and i.data.year == ano_atual
        )
        labels.append(f"{dia:02d}")
        data.append(faturamento_dia)

    data_json = {'data': data, 'labels': labels}

    return JsonResponse(data_json)
