# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_entry_blog_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='blog_type',
            field=models.IntegerField(choices=[(1, 'ComputerScience'), (2, 'Projects'), (3, 'HipHop')], default=1),
            preserve_default=True,
        ),
    ]
