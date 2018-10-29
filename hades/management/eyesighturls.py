# -*- coding: utf-8 -*-
"""
    Date: 2018-01-01
    Author: Tsystem
"""

from django.conf.urls import url
from management.views.eyesight import eyesightindex, vpnview, issueview, gitlabview, countryview, categoryview, assetview, radarview, attackview

urlpatterns = [
    url(r'^$', eyesightindex.index),

    url(r'^vpnlogin.do/$', vpnview.handle_vpnlogin),
    url(r'^vpnunusual.do/$', vpnview.handle_vpnunusual),

    # For Issues
    url(r'^issues.do/$', issueview.handle_issues),

    # For Gitlab
    url(r'^gitlab.do/$', gitlabview.handle_gitlab),

    # For Country
    url(r'^country.do/$', countryview.handle_country),

    # For Category
    url(r'^category.do/$', categoryview.handle_category),

    # For assets
    url(r'^assets.do/$', assetview.handle_asset),

    # For radar
    url(r'^radar.do/$', radarview.handle_radar),

    # For attack
    url(r'^attack.do/$', attackview.handle_attack),
]