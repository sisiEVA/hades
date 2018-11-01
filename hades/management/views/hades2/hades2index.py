# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""
from management.auth.auth import ad_login_required
from django.shortcuts import render


@ad_login_required
def index(request):
    return render(request, 'hades_two/hades2.html')
