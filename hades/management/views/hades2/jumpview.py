# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""
import json
from django.http import HttpResponse


def handle_jump(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "x": [
                "00:00",
                "00:00",
                "00:00",
                "00:00",
                "00:00",
                "04:00",
                "08:00",
                "12:00",
                "16:00",
                "20:00",
                "24:00"
            ],
            "y": [
                400,
                200,
                600,
                520,
                500,
                850,
                1400,
                890,
                800,
                1000,
                1200
            ]
        }
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
