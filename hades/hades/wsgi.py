"""
    Time: 2018-10-01
    Author: Tsystem
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hades.settings")

application = get_wsgi_application()
