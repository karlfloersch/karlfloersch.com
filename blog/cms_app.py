from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool
from django.utils.translation import ugettext_lazy as _

class MyApphook(CMSApp):
    name = _("Blog Apphook")
    urls = ["blog.urls"]

apphook_pool.register(MyApphook)