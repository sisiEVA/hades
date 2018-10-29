# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.http import HttpResponse
import json


def handle_login(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": [
            {
                "label": "主机",
                "value": "2618"
            },
            {
                "label": "正常登陆",
                "value": "2618"
            },
            {
                "label": "异常登录",
                "value": "2618"
            }
        ]
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
