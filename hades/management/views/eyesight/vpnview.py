# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.http import HttpResponse
import json


def handle_vpnlogin(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "x": ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00","14:00", "16:00", "18:00", "20:00", "22:00", "24:00"],
            "y": [234, 321, 456, 376, 487, 876, 1020, 998, 768, 687, 987, 346, 234]
        }
    }
    return HttpResponse(json.dumps(resp), content_type="application/json")


def handle_vpnunusual(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "x": ["00:00", "02:00", "04:00","06:00", "08:00","10:00", "12:00","14:00", "16:00", "18:00", "20:00", "22:00","24:00"],
            "y": {
                "unusual": [876, 456, 768, 988, 2031, 1098, 789, 678, 467, 678, 456, 758, 204]
            }
        }
    }
    return HttpResponse(json.dumps(resp), content_type="application/json")
