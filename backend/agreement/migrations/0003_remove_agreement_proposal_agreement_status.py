# Generated by Django 4.2.1 on 2023-05-24 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agreement', '0002_alter_agreement_proposal'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='agreement',
            name='proposal',
        ),
        migrations.AddField(
            model_name='agreement',
            name='status',
            field=models.CharField(choices=[('Właściciel', 'Wpis właściciela'), ('Zapytanie', 'Zapytanie otrzymującego'), ('Zapytanie potwierdzone', 'Zapytanie potwierdzone'), ('Zapytanie anulowane', 'Zapytanie anulowane')], default='Właściciel', max_length=50),
        ),
    ]
