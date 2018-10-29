# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

import json
from django.http import HttpResponse


def handle_radar(request):


    resp = {
        "status": 200,
        "message": "success",
        "data": {
        "warn": [
            {
                "title": "用户名",
                "content": "abc@163.com",
                "level": 0
            }
        ]}
    }
    return HttpResponse(json.dumps(resp), content_type="application/json")
