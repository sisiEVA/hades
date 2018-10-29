# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""
import json
from django.http import HttpResponse


def handle_country(request):

    resp = {
        "status": 200,
        "message": "success",
        "data": [
            {
                "time": "01:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "中国"
                    },
                    {
                        "sum": 20,
                        "country": "美国"
                    }
                ]
            },
            {
                "time": "02:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "韩国"
                    },
                    {
                        "sum": 20,
                        "country": "日本"
                    }
                ]
            },
            {
                "time": "03:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "俄罗斯"
                    },
                    {
                        "sum": 20,
                        "country": "冰岛"
                    }
                ]
            },
            {
                "time": "04:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "意大利"
                    },
                    {
                        "sum": 20,
                        "country": "美国"
                    }
                ]
            },
            {
                "time": "05:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "中国"
                    },
                    {
                        "sum": 20,
                        "country": "新西兰"
                    }
                ]
            },
            {
                "time": "06:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "中国"
                    },
                    {
                        "sum": 20,
                        "country": "美国"
                    }
                ]
            },
            {
                "time": "07:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "中国"
                    },
                    {
                        "sum": 20,
                        "country": "美国"
                    }
                ]
            },
            {
                "time": "08:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "中国"
                    },
                    {
                        "sum": 20,
                        "country": "美国"
                    }
                ]
            },
            {
                "time": "09:00",
                "values": [
                    {
                        "sum": 100,
                        "country": "中国"
                    },
                    {
                        "sum": 20,
                        "country": "美国"
                    }
                ]
            },
            {
                "time": "10:00",
                "values": [
                    {
                        "sum": 900,
                        "country": "韩国"
                    }
                ]
            },
            {
                "time": "11:00",
                "values": [
                    {
                        "sum": 900,
                        "country": "韩国"
                    }
                ]
            }
        ]
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")
