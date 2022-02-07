# This script open latest file and extract tracenum, datetime, status
# parameter will be insert into trace table to generate new trace id for component table
# after generate new id, will get and insert value to teststep table
# by Raja Nazirul 23 July 2020

import glob
import os
import json
import re
import os.path
import time
from datetime import datetime
import types


class Insert_SQL:
    def __init__(self, filename):
        with open(filename) as fh:
            for line in fh:
                # read line by line from log file
                # description = list(line.strip().split(None, 8))

                # print(description)
                if '.' in line:
                    if not re.search('\d+', line):
                        print('a')
                    else:  
                        number = re.search('\d*\.\d{2}', line)  
                        print(number)


try:
    # * means all if need specific format then *.csv
    list_of_files = glob.glob(
        'C:/Users/rajan/Desktop/SI_obj/Continental_VONE/input/*')
    filename = 'D:/empayarco/printing/test.html'
    Insert_SQL(filename)
except ValueError:
    pass
