# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.shortcuts import render


def index(request):
    return render(request, 'hades_two/hades2.html')
