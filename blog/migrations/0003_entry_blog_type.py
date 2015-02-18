# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20150208_1914'),
    ]

    operations = [
        migrations.AddField(
            model_name='entry',
            name='blog_type',
            field=models.IntegerField(default=1, choices=[('1', 'ComputerScience'), ('2', 'Projects'), ('3', 'HipHop')]),
            preserve_default=True,
        ),
    ]
