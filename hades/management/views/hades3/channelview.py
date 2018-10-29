# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""


from django.http import HttpResponse
import json
import datetime


def handle_channel(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": [
            {
                "channel": "新闻",
                "sum": 634
            },
            {
                "channel": "社交",
                "sum": 235
            },
            {
                "channel": "官媒",
                "sum": 676
            }
        ]
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
