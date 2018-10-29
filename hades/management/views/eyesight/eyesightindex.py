# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.shortcuts import render


def index(request):
    return render(request, 'hades_one/eyesight_index.html')