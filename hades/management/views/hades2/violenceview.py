# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""
from django.http import HttpResponse
import json


def handle_violence(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "x": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ],
            "y": {
                "ip": [
                    0,
                    300,
                    500,
                    400,
                    800,
                    1000,
                    1200
                ],
                "unusual": [
                    0,
                    500,
                    1000,
                    400,
                    200,
                    80,
                    300
                ]
            }
        }
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
