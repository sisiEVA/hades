from django.conf.urls import url
from management.views import indexview

urlpatterns = [
    url(r'^$', indexview.index),
    url(r'^index/$', indexview.index, name='index'),
    url(r'^login/$', indexview.login_site),
    url(r'^logout/$', indexview.logout_site),
]