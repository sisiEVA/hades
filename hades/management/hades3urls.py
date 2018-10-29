# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""


from django.conf.urls import url
from management.views.hades3 import hades3index
from management.views.hades3 import newsview
from management.views.hades3 import hotview
from management.views.hades3 import primaryview
from management.views.hades3 import count
from management.views.hades3 import trendview
from management.views.hades3 import channelview
from management.views.hades3 import typeview


urlpatterns = [
    url(r'^$', hades3index.index),

    url(r'^news.do/$', newsview.handle_news),

    url(r'^hot.do/$', hotview.handle_hot),

    url(r'^primary.do/$', primaryview.handle_primary),

    url(r'^count.do/$', count.handle_count),

    url(r'^trend.do/$', trendview.handle_trend),

    url(r'^channel.do/$', channelview.handle_channel),

    url(r'^type.do/$', typeview.handle_type),
]
