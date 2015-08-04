from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    user = models.ForeignKey(User)
    pub_date = models.DateTimeField()
    title = models.CharField(max_length=60)
    body = models.TextField()

    def __unicode__(self):
        return self.title

    # Reference the following for slug:
    # http://stackoverflow.com/questions/837828/how-do-i-create-a-slug-in-django


