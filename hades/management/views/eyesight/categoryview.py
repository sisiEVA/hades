# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""
import json
from django.http import HttpResponse


def handle_category(request):
    resp = {
          "status": 200,
          "message": "success",
          "data": [
            {
              "name": "DDOS",
              "percent": 20
            },
            {
              "name": "木马病毒",
              "percent": 50
            },
            {
              "name": "远程执行",
              "percent": 80
            },
            {
              "name": "注入攻击",
              "percent": 40
            }
          ]
        }

    return HttpResponse(json.dumps(resp), content_type="application/json")
