# -*- coding: utf-8 -*-

"""
    Time: 2018-10-01
    Author: Tsystem
"""

import pymysql
from django.conf import settings


class DBClient:

    @staticmethod
    def execute(sql):
        conn = pymysql.connect(host=settings.DATABASES['default']["HOST"], port=int(settings.DATABASES['default']["PORT"]), user= settings.DATABASES['default']["USER"], passwd=settings.DATABASES['default']["PASSWORD"], db=settings.DATABASES['default']["NAME"], charset='utf8')
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

        rows = cursor.fetchall()

        fields = []
        for field in cursor.description:
            fields.append(field[0])

        items = []
        for row in rows:
            tmp = {}
            for i in range(0, len(fields)):
                tmp[fields[i]] = row[i]

            items.append(tmp)

        cursor.close()
        conn.close()

        return items
