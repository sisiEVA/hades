# -*- coding: utf-8 -*-
"""
    date: 2018-03-01
    author: Tsystem
    Readme: ad_login_required
"""

from django.shortcuts import render


def has_permission(request=None):
    name = request.session.get("username", default=None)
    is_login = request.session.get("IS_LOGIN", False)

    if name is not None and is_login is True:
        return 1    # Login success
    else:
        return 0    # Login error


def ad_login_required(func):
    def wrapper(request, *args, **kwargs):
        if has_permission(request=request) == 0:
            return render(request, "login.html")
        else:
            return func(request, *args, **kwargs)
    return wrapper
