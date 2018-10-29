#!/usr/bin/env python
"""
    Time: 2018-10-01
    Author: Tsystem
"""
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hades.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
