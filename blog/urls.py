from django.conf.urls import patterns, include, url
from . import views, feed

urlpatterns = patterns('',
    url(r'^blog/$', views.BlogIndex.as_view(), name="index"),
    url(r'^blog/feed/$', feed.LatestPosts(), name="feed"),
    url(r'^blog/(?P<slug>\S+)$', views.BlogDetail.as_view(), name="entry_detail"),
)
