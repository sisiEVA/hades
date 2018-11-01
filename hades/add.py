# -*- coding:utf-8 -*-

import pymysql
import hashlib

password = "password"
salt = 'sjhahoibsaGHSAoiwhsoa'
password = hashlib.md5(salt+password).hexdigest()
print(password)
