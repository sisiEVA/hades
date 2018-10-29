# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.conf.urls import url
from management.views.hades2 import hades2index
from management.views.hades2 import jumpview
from management.views.hades2 import loginview
from management.views.hades2 import attackview
from management.views.hades2 import countryview
from management.views.hades2 import violenceview
from management.views.hades2 import leakview
from management.views.hades2 import hostview


urlpatterns = [
    url(r'^$', hades2index.index),

    url(r'^jump.do/$', jumpview.handle_jump),

    url(r'^login.do/$', loginview.handle_login),

    url(r'^attack.do/$', attackview.handle_attack),

    url(r'^country.do/$', countryview.handle_country),

    url(r'^violence.do/$', violenceview.handle_violence),

    url(r'^leak.do/$', leakview.handle_leak),

    url(r'^host.do/$', hostview.hande_host),
]
