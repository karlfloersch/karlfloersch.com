from django.contrib.syndication.views import Feed
from .models import Entry

# TODO: Add a Tech Latest posts and Music Latest posts

class LatestPosts(Feed):
    title = "Karl's Blog"
    link = "/feed/"
    description = "Latests Posts"

    def items(self):
        return Entry.objects.published()[:5]
