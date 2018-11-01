# -*- coding:utf-8 -*-
from django.http.response import HttpResponseRedirect, HttpResponse
from management.models import User
from django.contrib import auth
from django.shortcuts import render, render_to_response
from management.forms import UserForm
from django.template import RequestContext


def index(req):
    print(req.session.get('IS_LOGIN', False))
    is_login = req.session.get('IS_LOGIN', False)

    if is_login:
        return render_to_response('index.html')
    else:
        return render_to_response('login.html')


def login_site(request):
    is_login = request.session.get('IS_LOGIN', False)
    if is_login and request.method == 'GET':
        form = UserForm()
        warn_text = "请先登陆系统"
        return render_to_response('login.html', {"warn": warn_text})
    else:
        form = UserForm(request.POST)
        if form.is_valid():
            username = request.POST.get('username', '')
            password = request.POST.get('password', '')

            user = User.objects.filter(username=username, password=password)
            if user:
                request.session["username"] = username
                request.session["IS_LOGIN"] = True

                return render_to_response('index.html')
            else:
                return render_to_response('login.html')
        else:
            return render_to_response('login.html')


def logout_site(request):

    request.session["IS_LOGIN"] = False
    request.session["username"] = ""
    return render_to_response('login.html')
