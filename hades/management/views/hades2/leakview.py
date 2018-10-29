# -*- coding: utf-8 -*-
"""
    Time: 2018-10-01
    Author: Tsystem
"""

from django.http import HttpResponse
from django.db.models import Count
import json
import random


def handle_leak(request):

    list = ["拒绝服务", "代码执行", "目录遍历", "sudo无密码", "堆溢出", "整型溢出", "弱口令", "反序列化", "命令执行", "信息泄漏", "XXE注入", "配置篡改", "文件包含", "组件异常"]

    index_0 = random.randint(0, len(list)-11) # 0,3
    index_1 = random.randint(len(list)-10, len(list)-7) # 4,7
    index_2 = random.randint(len(list)-6, len(list)-3) # 8,11
    index_3 = random.randint(len(list)-2, len(list)-1) # 12,14



    resp = {
        "status": 200,
        "message": "success",
        "data": [
            list[index_0],
            list[index_1],
            list[index_2],
            list[index_3]
        ]
    }

    return HttpResponse(json.dumps(resp), content_type="application/json")

