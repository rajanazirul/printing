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
    def __init__(self, filename, output):
        output = open(output, "w")
        with open(filename, 'r') as fh:
            for line in fh:
                # read line by line from log file
                # description = list(line.strip().split(None, 8))
                # output.write(line)

                # print(description)
                if '.' in line:
                    if re.search('\d*\.\d{2}', line):
                        number = re.search('\d*\.\d{2}', line).group(0)
                        # print(type(number))
                        price_before = float(number)
                        price_after = price_before * 140/100
                        # print(price_before)
                        # print(price_after)
                        price_after_string = str(price_after)
                        line = re.sub("\d*\.\d{2}" , price_after_string, line)
                        output.write(line)
                    else:
                        output.write(line)
                else:
                    output.write(line)


try:
    output = 'D:/empayarco/printing/output.html'
    filename = 'D:/empayarco/printing/test.html'
    Insert_SQL(filename, output)
except ValueError:
    pass
