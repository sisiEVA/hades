# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.http import HttpResponse
import json


def handle_attack(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": [
            {
                "label": "木马",
                "value": "618"
            },
            {
                "label": "后门",
                "value": "28"
            },
            {
                "label": "篡改",
                "value": "28"
            },
            {
                "label": "暗链",
                "value": "28"
            },
            {
                "label": "黑页",
                "value": "28"
            }
        ]
    }
    return HttpResponse(json.dumps(resp), content_type="application/json")
