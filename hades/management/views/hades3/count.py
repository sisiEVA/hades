# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""
from django.http import HttpResponse
import datetime
import json


def handle_count(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": {
            "sum": 1800,
            "news": 1231230,
            "keyword": 123123,
            "positive": 300,
            "negative": 700,
            "positiveChange": "+2.5%",
            "negativeChange": "-2.5%"
        }
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
