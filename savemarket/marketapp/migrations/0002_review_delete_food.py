# Generated by Django 4.0.4 on 2022-08-02 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('content', models.TextField()),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Food',
        ),
    ]
