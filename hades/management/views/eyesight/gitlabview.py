# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

import json
from django.http import HttpResponse


def handle_gitlab(request):

    resp = {
          "status": 200,
          "message": "success",
          "data": [
            {
              "name": "扫描代码量",
              "sum": 134234
            },
            {
              "name": "相关代码数据",
              "sum": 4909090
            },
            {
              "name": "风险代码量",
              "sum": 23123344
            },
            {
              "name": "相关代码",
              "sum": 989080
            }
          ]
        }

    return HttpResponse(json.dumps(resp), content_type="application/json")
