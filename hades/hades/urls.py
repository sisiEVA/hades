"""
    Time: 2018-10-01
    Author: Tsystem
"""
from management.views import indexview
from django.conf.urls import include, url

urlpatterns = [
    url(r'^$', indexview.index),
    url(r'^eyesight/', include('management.eyesighturls')),
    url(r'^hades2/', include('management.hades2urls')),
    url(r'^hades3/', include('management.hades3urls')),
]
