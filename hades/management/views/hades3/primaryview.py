# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.http import HttpResponse
import datetime
import json


def handle_primary(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": [
            {
                "media": "今日头条",
                "sum": 3700,
                "positive": 2300,
                "negative": 1400
            },
            {
                "media": "一点资讯",
                "sum": 1800,
                "positive": 1200,
                "negative": 600
            },
            {
                "media": "新浪微博",
                "sum": 1600,
                "positive": 300,
                "negative": 1300
            },
            {
                "media": "微信公众",
                "sum": 1600,
                "positive": 1400,
                "negative": 200
            },
            {
                "media": "中国交通网",
                "sum": 500,
                "positive": 200,
                "negative": 300
            },
            {
                "media": "脉脉网",
                "sum": 1500,
                "positive": 300,
                "negative": 1200
            },
            {
                "media": "搜狐新闻",
                "sum": 1400,
                "positive": 1200,
                "negative": 200
            },
            {
                "media": "鸭梨视频",
                "sum": 300,
                "positive": 100,
                "negative": 200
            },
            {
                "media": "36氪",
                "sum": 320,
                "positive": 220,
                "negative": 100
            },
            {
                "media": "仕途网",
                "sum": 100,
                "positive": 50,
                "negative": 50
            }
        ]
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
