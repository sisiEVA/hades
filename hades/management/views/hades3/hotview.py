# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.http import HttpResponse
import json
import random


def handle_hot(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": [
            {
                "label": "限产限行",
                "fontSize": "12"
            },
            {
                "label": "共享单车",
                "fontSize": "14"
            },
            {
                "label": "滴滴出行",
                "fontSize": "16"
            },
            {
                "label": "首期约车",
                "fontSize": "18"
            },
            {
                "label": "互联网加",
                "fontSize": "20"
            },
            {
                "label": "智能出行",
                "fontSize": "13"
            },
            {
                "label": "共享时代",
                "fontSize": "15"
            },
            {
                "label": "胡玮炜",
                "fontSize": "22"
            },
            {
                "label": "押金",
                "fontSize": "13"
            },
            {
                "label": "共享单车",
                "fontSize": "22"
            },
            {
                "label": "反腐贪污",
                "fontSize": "13"
            },
            {
                "label": "共享倒闭",
                "fontSize": "22"
            },
            {
                "label": "智慧骑行",
                "fontSize": "22"
            },
            {
                "label": "上市",
                "fontSize": "22"
            },
            {
                "label": "美团打车",
                "fontSize": "22"
            },
            {
                "label": "共享教育",
                "fontSize": "18"
            },
        ]
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
