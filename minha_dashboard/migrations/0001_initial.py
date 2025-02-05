# Generated by Django 5.1.5 on 2025-01-19 17:18

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Vendedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Vendas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.FloatField()),
                ('data', models.DateTimeField(default=datetime.datetime.now)),
                ('nome_produto', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='minha_dashboard.produto')),
                ('vendedor', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='minha_dashboard.vendedor')),
            ],
        ),
    ]
