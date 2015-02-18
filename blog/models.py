from django.db import models
from django_markdown.models import MarkdownField
from django.core.urlresolvers import reverse

class Tag(models.Model):
    slug = models.SlugField(max_length=200, unique=True)

    def __str__(self):
        return self.slug

class EntryQuerySet(models.QuerySet):
    def published(self):
        return self.filter(publish=True)

    def published_comp_sci(self):
        return self.filter(publish=True, blog_type=1)

class Entry(models.Model):
    BLOG_CHOICES = (
        (1, 'ComputerScience'),
        (2, 'Projects'),
        (3, 'HipHop'),
    )
    title = models.CharField(max_length=200)
    body = MarkdownField()
    slug = models.SlugField(max_length=200, unique=True)
    publish = models.BooleanField(default=True)
    blog_type = models.IntegerField(choices=BLOG_CHOICES, default=1)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag)

    objects = EntryQuerySet.as_manager()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("entry_detail", kwargs={"slug": self.slug})

    class Meta:
        verbose_name = "Blog Entry"
        verbose_name_plural = "Blog Entries"
        ordering = ["-created"]

