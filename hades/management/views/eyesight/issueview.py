# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

import json
from django.http import HttpResponse


def handle_issues(reuquest):

    resp = {
          "status": 200,
          "message": "success",
          "data": [
            {
              "title": "Struct-045远程代码执行漏洞",
              "url": "#",
              "warn": False
            },
            {
              "title": "CVE-2018-09-21 Spring框架远程命令执行",
              "url": "#",
              "warn": True
            },
            {
              "title": "在私有以太坊上实现针对ERC20数字货币ProxyOverflow漏洞的攻击",
              "url": "#",
              "warn": False
            },
            {
              "title": "Discuz防注入函数绕过方法分析",
              "url": "#",
              "warn": False
            },
            {
              "title": "不用cookie 一个盲打储存XSS对“某btc平台”攻城略地",
              "url": "#",
              "warn": True
            },
            {
              "title": "针对Weblogic测试的一些小总结",
              "url": "#",
              "warn": False
            },
            {
              "title": "如何绕过 Web 应用程序防火墙（WAF）？",
              "url": "#",
              "warn": False
            },
            {
              "title": "Electron < v1.8.2-beta.4 远程命令执行漏洞—【CVE-2018-1000006】",
              "url": "#",
              "warn": False
            },
            {
              "title": "marty <= 3.1.32 PHP代码执行漏洞分析—【CVE-2017-1000480】",
              "url": "#",
              "warn": False
            },
            {
              "title": "如何通过EW做Socks5代理进行内网渗透",
              "url": "#",
              "warn": False
            },
            {
              "title": "Django框架在Web开发中的应用及可能产生的安全问题汇总（一）",
              "url": "#",
              "warn": True
            },
            {
              "title": "ecshop(前台sql注入)",
              "url": "#",
              "warn": False
            }
          ]
        }

    return HttpResponse(json.dumps(resp), content_type="application/json")
