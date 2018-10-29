# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""


from django.http import HttpResponse
import datetime
import json


def handle_trend(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "x": [
                "01:00",
                "02:00",
                "03:00",
                "04:00",
                "05:00",
                "06:00",
                "07:00",
                "08:00",
                "09:00",
                "10:00",
                "24:00"
            ],
            "y": {
                "positive": [
                    0,
                    300,
                    100,
                    520,
                    800,
                    1450,
                    1200,
                    1890,
                    1778,
                    970,
                    210
                ],
                "negative": [
                    210,
                    200,
                    300,
                    520,
                    1500,
                    1450,
                    230,
                    3680,
                    230,
                    480,
                    10
                ]
            }
        }
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
