from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name="home"),
    path('/relatorio_faturamento_mensal', views.relatorio_faturamento_mensal, name='relatorio_faturamento_mensal'),
    path('/retorna_total_vendido', views.retorna_total_vendido, name='retorna_total_vendido'),
    path('alugueis', views.alugueis, name='alugueis'),
]