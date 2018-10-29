# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

import json
from django.http import HttpResponse
from django.db.models import Q


def handle_asset(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "ip": 1231,
            "domain": 2647,
            "port": 476583
        }
    }
    return HttpResponse(json.dumps(resp), content_type="application/json")
