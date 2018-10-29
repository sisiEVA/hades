# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""


from django.http import HttpResponse
import datetime
import json


def handle_type(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": [
            {
                "type": "社交媒体",
                "sum": 5476,
                "trend": "同比↑34%"
            },
            {
                "type": "政府网站",
                "sum": 2768,
                "trend": "同比↓34%"
            },
            {
                "type": "形势政策",
                "sum": 6885,
                "trend": "同比↓34%"
            },
            {
                "type": "共享单车",
                "sum": 2894,
                "trend": "同比↑34%"
            },
            {
                "type": "无人车",
                "sum": 1239,
                "trend": "同比↓34%"
            }
        ]
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
