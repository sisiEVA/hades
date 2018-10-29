# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""
from django.http import HttpResponse
import json


def hande_host(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "label": [
                "木马",
                "破解",
                "情报",
                "口令"
            ],
            "ip": [
                {
                    "ip": "192.168.34.67",
                    "sum": 467,
                    "percent": [
                        10,
                        40,
                        0,
                        50
                    ]
                },
                {
                    "ip": "23.65.47.87",
                    "sum": 768,
                    "percent": [
                        10,
                        20,
                        10,
                        60
                    ]
                },
                {
                    "ip": "172.16.89.34",
                    "sum": 666,
                    "percent": [
                        20,
                        30,
                        0,
                        80
                    ]
                },
                {
                    "ip": "67.34.134.234",
                    "sum": 236,
                    "percent": [
                        60,
                        10,
                        10,
                        20
                    ]
                },
                {
                    "ip": "57.98.35.121",
                    "sum": 314,
                    "percent": [
                        15,
                        5,
                        40,
                        40
                    ]
                }
            ]
        }
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
